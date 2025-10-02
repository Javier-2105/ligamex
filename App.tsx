
import React, { useState, useEffect } from 'react';
import { Team } from './types';
import { LIGA_MX_TEAMS } from './constants';
import TeamCard from './components/TeamCard';
import TeamDetail from './components/TeamDetail';
import { Header } from './components/Header';

const App: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTeams, setFilteredTeams] = useState<Team[]>(LIGA_MX_TEAMS);

  // Effect to filter teams based on search query
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase().trim();
    const newFilteredTeams = LIGA_MX_TEAMS.filter(team =>
      team.name.toLowerCase().includes(lowercasedQuery) ||
      team.fullName.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredTeams(newFilteredTeams);
  }, [searchQuery]);


  const handleSelectTeam = (team: Team) => {
    setSelectedTeam(team);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  // Effect to handle body scroll
  useEffect(() => {
    if (showDetail) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showDetail]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div 
            className={`transition-all duration-700 ease-in-out ${showDetail ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-200">
            Selecciona un Equipo
          </h2>

          <div className="mb-8 w-full max-w-2xl mx-auto">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar equipo por nombre..."
                className="w-full px-5 py-3 bg-gray-800 text-white border-2 border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-md"
                aria-label="Buscar equipo"
            />
          </div>
          
          {filteredTeams.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {filteredTeams.map((team, index) => {
                const delayClass = `animation-delay-${((index % 6) + 1) * 100}`;
                return (
                  <TeamCard 
                    key={team.id} 
                    team={team} 
                    onSelect={handleSelectTeam}
                    className={`will-animate animate-subtle-zoom ${delayClass}`}
                  />
                )
              })}
            </div>
          ) : (
             <div className="text-center py-12">
                <p className="text-gray-400 text-xl">No se encontraron equipos.</p>
            </div>
          )}
        </div>
        
        {selectedTeam && (
          <TeamDetail 
            team={selectedTeam} 
            isVisible={showDetail}
            onClose={handleCloseDetail} 
          />
        )}
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        <p>Exhibición de Equipos Liga MX &copy; 2024</p>
      </footer>
    </div>
  );
};

export default App;
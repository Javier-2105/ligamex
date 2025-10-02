export interface TeamColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  textSecondary: string;
}

export interface Scorer {
  name: string;
  goals: number;
}

export interface PlayerToWatch {
  name: string;
  position: string;
  description: string;
}

export interface Team {
  id: string;
  name: string;
  fullName: string;
  logoUrl: string;
  foundationDate: string;
  stadium: string;
  topScorers: Scorer[];
  titles: string[];
  logoEvolutionUrl: string;
  colors: TeamColors;
  squadSize: number;
  foreignPlayers: number;
  averageAge: number;
  playerToWatch: PlayerToWatch;
  totalGoals: number;
  gamesPlayed: number;
}
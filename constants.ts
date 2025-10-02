import { Team } from './types';

export const LIGA_MX_TEAMS: Team[] = [
  {
    id: 'america',
    name: 'Club América',
    fullName: 'Club de Fútbol América S.A. de C.V.',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Club_Am%C3%A9rica_crest.svg/1200px-Club_Am%C3%A9rica_crest.svg.png',
    foundationDate: '12 de octubre de 1916',
    stadium: 'Estadio Azteca',
    topScorers: [
      { name: 'Luis Roberto Alves "Zague"', goals: 188 },
      { name: 'Cuauhtémoc Blanco', goals: 153 },
      { name: 'Octavio Vial', goals: 152 },
    ],
    titles: [
      '14 Ligas MX',
      '7 Concacaf Champions League',
      '6 Copa MX',
      '6 Campeón de Campeones',
    ],
    logoEvolutionUrl: 'https://cdn.prod.website-files.com/66202c174b946962d0a84fa0/66631e11f3b83cd00d7df92b_club-america-escudos-historia-980x992.jpgm ',
    colors: {
      primary: '#002855', // Dark Blue
      secondary: '#FDB913', // Yellow
      accent: '#EAAA00',
      text: '#FFFFFF',
      textSecondary: '#FDB913',
    },
    squadSize: 25,
    foreignPlayers: 10,
    averageAge: 27.5,
    playerToWatch: {
      name: 'Diego Valdés',
      position: 'Mediocampista',
      description: 'El motor creativo del equipo, clave en la generación de jugadas de gol.'
    },
    totalGoals: 35,
    gamesPlayed: 17,
  },
  {
    id: 'chivas',                                                                                     
    name: 'Chivas',
    fullName: 'Club Deportivo Guadalajara S.A. de C.V.',
    logoUrl: 'https://images.seeklogo.com/logo-png/2/2/chivas-2007-logo-png_seeklogo-29875.png',
    foundationDate: '8 de mayo de 1906',
    stadium: 'Estadio Akron',
    topScorers: [
      { name: 'Omar Bravo', goals: 160 },
      { name: 'Salvador Reyes', goals: 154 },
      { name: 'Eduardo de la Torre', goals: 102 },
    ],
    titles: [
      '12 Ligas MX',
      '4 Copa MX',
      '7 Campeón de Campeones',
      '2 Concacaf Champions League',
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2ccygmJEsF7htNNSyKVsLlzl3N2t9X1jO6N2iKY1QcH_niElwu4FWrUmfwWI0iVrDrA&usqp=CAU',
    colors: {
      primary: '#CE0E2D', // Red
      secondary: '#002855', // Blue
      accent: '#FFFFFF',
      text: '#FFFFFF',
      textSecondary: '#FFFFFF',
    },
    squadSize: 26,
    foreignPlayers: 0,
    averageAge: 25.8,
    playerToWatch: {
      name: 'Roberto Alvarado',
      position: 'Delantero',
      description: 'Conocido como "El Piojo", su habilidad y desequilibrio son fundamentales en el ataque.'
    },
    totalGoals: 25,
    gamesPlayed: 17,
  },
  {
    id: 'cruz_azul',
    name: 'Cruz Azul',
    fullName: 'Club de Fútbol Cruz Azul',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Club_de_Futbol_Cruz_Azul.svg/2048px-Club_de_Futbol_Cruz_Azul.svg.png',
    foundationDate: '22 de mayo de 1927',
    stadium: 'Estadio Ciudad de los Deportes',
    topScorers: [
      { name: 'Carlos Hermosillo', goals: 198 },
      { name: 'Horacio López Salgado', goals: 133 },
      { name: 'Francisco Palencia', goals: 110 },
    ],
    titles: [
      '9 Ligas MX',
      '6 Concacaf Champions League',
      '4 Copa MX',
      '3 Campeón de Campeones',
    ],
    logoEvolutionUrl: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/500774182_1139494064859323_2477143432081311642_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xCxVZg0ZLP4Q7kNvwHcdnta&_nc_oc=AdkTOTWmqkxtpVYb99HOxmLlAg29MqxO8OnUxIE7xwqgV6E4opqWG47OdadjhGXiGxDhp1gz3ZJAgsYVvzywZHss&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=QtXt6DhZGbSUSeFN78e63Q&oh=00_AfaHsxymovU1ETD_YeUHUoACX17lm-8jSoL28jl_TcaiFQ&oe=68DBFAAB',
    colors: {
      primary: '#003366', // Dark Blue
      secondary: '#DA291C', // Red
      accent: '#FFFFFF',
      text: '#FFFFFF',
      textSecondary: '#FFFFFF',
    },
    squadSize: 24,
    foreignPlayers: 8,
    averageAge: 28.1,
    playerToWatch: {
      name: 'Uriel Antuna',
      position: 'Extremo',
      description: 'Velocidad y regate son sus mayores virtudes, un peligro constante por las bandas.'
    },
    totalGoals: 28,
    gamesPlayed: 17,
  },
  {
    id: 'pumas',
    name: 'Pumas UNAM',
    fullName: 'Club Universidad Nacional A.C.',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Club_Universidad_Nacional_logo.svg/1200px-Club_Universidad_Nacional_logo.svg.png',
    foundationDate: '2 de agosto de 1954',
    stadium: 'Estadio Olímpico Universitario',
    topScorers: [
      { name: 'Evanivaldo Castro "Cabinho"', goals: 166 },
      { name: 'Ricardo Ferretti', goals: 128 },
      { name: 'Manuel Negrete', goals: 112 },
    ],
    titles: [
      '7 Ligas MX',
      '3 Concacaf Champions League',
      '1 Copa MX',
      '2 Campeón de Campeones',
    ],
    logoEvolutionUrl: 'https://pumas.mx/assets/img/identidad/escudo.jpg',
    colors: {
      primary: '#001E4D', // Navy Blue
      secondary: '#B3A369', // Gold
      accent: '#C7B98B',
      text: '#FFFFFF',
      textSecondary: '#B3A369',
    },
    squadSize: 27,
    foreignPlayers: 9,
    averageAge: 26.2,
    playerToWatch: {
      name: 'César Huerta',
      position: 'Extremo',
      description: '"El Chino" se ha consolidado como un referente ofensivo gracias a su desborde y capacidad de definición.'
    },
    totalGoals: 27,
    gamesPlayed: 17,
  },
  {
    id: 'monterrey',
    name: 'Rayados',
    fullName: 'Club de Fútbol Monterrey',
    logoUrl: 'https://1000marcas.net/wp-content/uploads/2023/01/Rayados-Logo.png',
    foundationDate: '28 de junio de 1945',
    stadium: 'Estadio BBVA',
    topScorers: [
      { name: 'Rogelio Funes Mori', goals: 160 },
      { name: 'Humberto Suazo', goals: 121 },
      { name: 'Dorlan Pabón', goals: 88 },
    ],
    titles: [
      '5 Ligas MX',
      '5 Concacaf Champions League',
      '3 Copa MX',
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7qSfWJ9p5EqfCuQV35DKE7v7blj6UjPcpMrX9oQKDjg8Byg82P_3J625jbzfkdfiMNw&usqp=CAU',
    colors: {
      primary: '#0A2240', // Navy Blue
      secondary: '#FFFFFF', // White
      accent: '#A9B7C4',
      text: '#FFFFFF',
      textSecondary: '#0A2240',
    },
    squadSize: 25,
    foreignPlayers: 10,
    averageAge: 28.8,
    playerToWatch: {
      name: 'Sergio Canales',
      position: 'Mediocampista',
      description: 'El talentoso español aporta visión de juego, calidad en el pase y una excelente pegada.'
    },
    totalGoals: 32,
    gamesPlayed: 17,
  },
  {
    id: 'tigres',
    name: 'Tigres UANL',
    fullName: 'Club de Fútbol Tigres de la Universidad Autónoma de Nuevo León',
    logoUrl: 'https://images.seeklogo.com/logo-png/29/2/tigres-uanl-logo-png_seeklogo-296784.png',
    foundationDate: '7 de marzo de 1960',
    stadium: 'Estadio Universitario',
    topScorers: [
      { name: 'André-Pierre Gignac', goals: 209 },
      { name: 'Tomás Boy', goals: 104 },
      { name: 'Walter Gaitán', goals: 80 },
    ],
    titles: [
      '8 Ligas MX',
      '1 Concacaf Champions League',
      '3 Copa MX',
      '4 Campeón de Campeones',
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszdwDjf2Kj3b78MslTWxmcVQHs8bPAxzvXVgOwK2iseiozFga_mBPbLCCO3r1RnBx8wY&usqp=CAU',
    colors: {
      primary: '#FDB913', // Yellow Gold
      secondary: '#002855', // Dark Blue
      accent: '#0055A4',
      text: '#002855',
      textSecondary: '#FFFFFF',
    },
    squadSize: 26,
    foreignPlayers: 11,
    averageAge: 29.3,
    playerToWatch: {
      name: 'Juan Brunetta',
      position: 'Mediocampista Ofensivo',
      description: 'Líder en asistencias de la liga, su inteligencia y técnica lo convierten en el cerebro del ataque felino.'
    },
    totalGoals: 34,
    gamesPlayed: 17,
  },
  {
    id: 'toluca',
    name: 'Toluca',
    fullName: 'Deportivo Toluca Fútbol Club S.A. de C.V.',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Club_Toluca_Logo.svg/2048px-Club_Toluca_Logo.svg.png',
    foundationDate: '12 de febrero de 1917',
    stadium: 'Estadio Nemesio Díez',
    topScorers: [
        { name: 'José Saturnino Cardozo', goals: 249 },
        { name: 'Vicente Pereda', goals: 119 },
        { name: 'Héctor Mancilla', goals: 95 },
    ],
    titles: [
        '10 Ligas MX',
        '2 Copa MX',
        '4 Campeón de Campeones',
        '2 Concacaf Champions League',
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr4CDQR3gQy89GBX_nJc7qokJU5XQlDoSijl32LVTxUbYV7Y395dLNuncFd3neNaLkBQA&usqp=CAU',
    colors: {
        primary: '#DA291C', // Red
        secondary: '#FFFFFF', // White
        accent: '#003366', // Blue
        text: '#000000',
        textSecondary: '#FFFFFF',
    },
    squadSize: 25,
    foreignPlayers: 9,
    averageAge: 27.1,
    playerToWatch: {
        name: 'Alexis Vega',
        position: 'Delantero',
        description: 'Un atacante desequilibrante con gran capacidad para el regate y el disparo de media distancia.'
    },
    totalGoals: 30,
    gamesPlayed: 17,
  },
  {
    id: 'pachuca',
    name: 'Pachuca',
    fullName: 'Club de Fútbol Pachuca',
    logoUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6tr7QbNHYUJ2N1FeSgv-Q1hbDNFjRwUib_Fp_GumFcxt8ybLVmWo39zXXBGJ-IJZu96C1ZPeqB7R31lKuhdrGElfJ-kaePLXBgTN-d8dA-31HGYZ5N_qlF3k_4qAXnQUZ6tcAavW__rQ/s1600/LoGO+Pachuca.png',
    foundationDate: '1 de noviembre de 1892',
    stadium: 'Estadio Hidalgo',
    topScorers: [
        { name: 'Franco Jara', goals: 83 },
        { name: 'Gabriel Caballero', goals: 77 },
        { name: 'Christian Giménez', goals: 74 },
    ],
    titles: [
        '7 Ligas MX',
        '6 Concacaf Champions League',
        '1 Copa Sudamericana',
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBR62pVXsNTaPtm38Uio9WlPSVtv18Ot0vPCYm86CSlQRVeA9mxDyq5nzoFSq9AzZyNWs&usqp=CAU',
    colors: {
        primary: '#003087', // Blue
        secondary: '#FFFFFF', // White
        accent: '#00A3E0', // Light Blue
        text: '#FFFFFF',
        textSecondary: '#003087',
    },
    squadSize: 28,
    foreignPlayers: 10,
    averageAge: 25.5,
    playerToWatch: {
        name: 'Érick Sánchez',
        position: 'Mediocampista',
        description: '"Chiquito" es el corazón del mediocampo, con una gran visión de juego y llegada al área.'
    },
    totalGoals: 29,
    gamesPlayed: 17,
  },
  {
    id: 'santos',
    name: 'Santos Laguna',
    fullName: 'Club Santos Laguna S.A. de C.V.',
    logoUrl: 'https://logodownload.org/wp-content/uploads/2020/05/santos-laguna-logo.png',
    foundationDate: '4 de septiembre de 1983',
    stadium: 'Estadio Corona',
    topScorers: [
        { name: 'Jared Borgetti', goals: 205 },
        { name: 'Matías Vuoso', goals: 107 },
        { name: 'Oribe Peralta', goals: 97 },
    ],
    titles: [
        '6 Ligas MX',
        '1 Copa MX',
        '1 Campeón de Campeones',
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cuxG49YiK5z-vr-ry7MxZ2UEcbAa3HS7ShSZ7syWOYz9LS5qOAp6sll0FTmrMFDbx30&usqp=CAU',
    colors: {
        primary: '#00693E', // Green
        secondary: '#FFFFFF', // White
        accent: '#B3A369', // Gold
        text: '#FFFFFF',
        textSecondary: '#00693E',
    },
    squadSize: 24,
    foreignPlayers: 9,
    averageAge: 26.8,
    playerToWatch: {
        name: 'Harold Preciado',
        position: 'Delantero',
        description: 'Un goleador nato, su potencia física y definición lo hacen una amenaza constante para las defensas rivales.'
    },
    totalGoals: 26,
    gamesPlayed: 17,
  },
  {
    id: 'leon',
    name: 'León',
    fullName: 'Club León',
    logoUrl: 'https://logodownload.org/wp-content/uploads/2022/01/club-leon-logo.png',
    foundationDate: '20 de agosto de 1944',
    stadium: 'Estadio León',
    topScorers: [
        { name: 'Adalberto "Dumbo" López', goals: 136 },
        { name: 'Mauro Boselli', goals: 130 },
        { name: 'Milton Queiroz "Tita"', goals: 97 },
    ],
    titles: [
        '8 Ligas MX',
        '5 Copa MX',
        '5 Campeón de Campeones',
        '1 Concacaf Champions League'
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFInElfqshDHmHAdAYOshNYRHlXQYLv9R30iHgCmgfDNspMg4sTCgxwfNmWtSUH7ur2u4&usqp=CAU',
    colors: {
        primary: '#006241', // Green
        secondary: '#FFC72C', // Yellow
        accent: '#FFFFFF',
        text: '#FFFFFF',
        textSecondary: '#000000',
    },
    squadSize: 23,
    foreignPlayers: 8,
    averageAge: 27.9,
    playerToWatch: {
        name: 'Ángel Mena',
        position: 'Extremo',
        description: 'El "Ángel del Gol", un jugador ecuatoriano con una zurda privilegiada y una gran capacidad para asistir y anotar.'
    },
    totalGoals: 28,
    gamesPlayed: 17,
  },
  {
    id: 'atlas',
    name: 'Atlas',
    fullName: 'Atlas Fútbol Club',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/F%C3%BAtbol_Club_Atlas.PNG',
    foundationDate: '15 de agosto de 1916',
    stadium: 'Estadio Jalisco',
    topScorers: [
        { name: 'José de Jesús Aceves', goals: 82 },
        { name: 'Robert de Pinho', goals: 73 },
        { name: 'Daniel Osorno', goals: 69 },
    ],
    titles: [
        '3 Ligas MX',
        '4 Copa MX',
        '4 Campeón de Campeones',
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWR7xD0tp3bmdRuSBiymKQMjTpYUG6KwVwLZxR04K-gbqljAoX3HhFcfI9SKB3DvIuNxE&usqp=CAU',
    colors: {
        primary: '#CE0E2D', // Red
        secondary: '#000000', // Black
        accent: '#FFFFFF',
        text: '#FFFFFF',
        textSecondary: '#FFFFFF',
    },
    squadSize: 26,
    foreignPlayers: 9,
    averageAge: 26.4,
    playerToWatch: {
        name: 'Camilo Vargas',
        position: 'Portero',
        description: 'El guardián del arco, un líder en la defensa y pieza clave en los títulos recientes del club.'
    },
    totalGoals: 22,
    gamesPlayed: 17,
  },
  {
    id: 'tijuana',
    name: 'Xolos',
    fullName: 'Club Tijuana Xoloitzcuintles de Caliente',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Club_Tijuana_logo.svg/250px-Club_Tijuana_logo.svg.png',
    foundationDate: '14 de enero de 2007',
    stadium: 'Estadio Caliente',
    topScorers: [
        { name: 'Dayro Moreno', goals: 50 },
        { name: 'Duvier Riascos', goals: 41 },
        { name: 'Gustavo Bou', goals: 28 },
    ],
    titles: [
        '1 Liga MX',
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZ0NiybFnJM_OMX6OHWWFbajMXfUgHdEPrRNYVcWiuV2sNDdG4CAI0JxOC9fpINcR4VU&usqp=CAU',
    colors: {
        primary: '#9E1B32', // Dark Red
        secondary: '#000000', // Black
        accent: '#FFFFFF',
        text: '#FFFFFF',
        textSecondary: '#FFFFFF',
    },
    squadSize: 25,
    foreignPlayers: 10,
    averageAge: 27.0,
    playerToWatch: {
        name: 'Carlos González',
        position: 'Delantero',
        description: '"Cocoliso" es un delantero paraguayo con un imponente juego aéreo y gran olfato de gol.'
    },
    totalGoals: 24,
    gamesPlayed: 17,
  },
  {
    id: 'puebla',
    name: 'Puebla',
    fullName: 'Club Puebla',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJbEevAZjejVt1KmrAvtSFaTeSFqSSE8oAw&s',
    foundationDate: '7 de mayo de 1944',
    stadium: 'Estadio Cuauhtémoc',
    topScorers: [
        { name: 'Ricardo Álvarez', goals: 87 },
        { name: 'Carlos Poblete', goals: 83 },
        { name: 'Silvio Fogel', goals: 81 },
    ],
    titles: [
        '2 Ligas MX',
        '5 Copa MX',
        '1 Campeón de Campeones',
        '1 Concacaf Champions League',
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqaM96hcksKcRlD6S0zObP5wLGfsfWJT0IxpYNYT4RSeQ2fU-Qaa2kt1yLfSa8rn8wXdE&usqp=CAU',
    colors: {
        primary: '#003A70', // Blue
        secondary: '#FFFFFF', // White
        accent: '#00529B', // Lighter Blue
        text: '#FFFFFF',
        textSecondary: '#003A70',
    },
    squadSize: 24,
    foreignPlayers: 8,
    averageAge: 26.6,
    playerToWatch: {
        name: 'Diego de Buen',
        position: 'Mediocampista',
        description: 'El capitán y ancla del mediocampo, conocido por su liderazgo y su potente disparo de larga distancia.'
    },
    totalGoals: 21,
    gamesPlayed: 17,
  },
  {
    id: 'queretaro',
    name: 'Querétaro',
    fullName: 'Querétaro Fútbol Club',
    logoUrl: 'https://logoeps.com/wp-content/uploads/2013/04/queretaro-club-futbol-vector-logo.png',
    foundationDate: '8 de julio de 1950',
    stadium: 'Estadio Corregidora',
    topScorers: [
        { name: 'Camilo Sanvezzo', goals: 67 },
        { name: 'Emanuel Villa', goals: 45 },
        { name: 'Carlos Bueno', goals: 30 },
    ],
    titles: [
        '1 Copa MX',
        '1 Supercopa MX',
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYczxckSF_MMiCSiTsIibL_TXFw9sfw5Sc2CHr3Mut7yvv1NBNZn051njrFGd1GBVeqX0&usqp=CAU',
    colors: {
        primary: '#005A9C', // Blue
        secondary: '#000000', // Black
        accent: '#FFFFFF',
        text: '#FFFFFF',
        textSecondary: '#FFFFFF',
    },
    squadSize: 26,
    foreignPlayers: 9,
    averageAge: 27.3,
    playerToWatch: {
        name: 'Pablo Barrera',
        position: 'Extremo',
        description: 'Un jugador experimentado con una gran habilidad para el desborde y el centro, siendo un referente del equipo.'
    },
    totalGoals: 19,
    gamesPlayed: 17,
  },
  {
    id: 'necaxa',
    name: 'Necaxa',
    fullName: 'Impulsora del Deportivo Necaxa S.A. de C.V.',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Club_Necaxa_Logo.svg/607px-Club_Necaxa_Logo.svg.png',
    foundationDate: '21 de agosto de 1923',
    stadium: 'Estadio Victoria',
    topScorers: [
        { name: 'Ricardo Peláez', goals: 138 },
        { name: 'Álex Aguinaga', goals: 93 },
        { name: 'Sergio Zárate', goals: 88 },
    ],
    titles: [
        '3 Ligas MX',
        '4 Copa MX',
        '2 Campeón de Campeones',
        '1 Concacaf Champions League',
    ],
    logoEvolutionUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dLQuk3Zzp0CVnIZK9gh_k6gh54rtMkAto9vePifjXr4R9oGSSm8CNzHFUDVEJu6TEuU&usqp=CAU',
    colors: {
        primary: '#ED1C24', // Red
        secondary: '#FFFFFF', // White
        accent: '#000000', // Black
        text: '#FFFFFF',
        textSecondary: '#000000',
    },
    squadSize: 25,
    foreignPlayers: 10,
    averageAge: 26.1,
    playerToWatch: {
        name: 'Diber Cambindo',
        position: 'Delantero',
        description: 'Un potente delantero colombiano, su fuerza física y capacidad goleadora lo convierten en la principal referencia ofensiva.'
    },
    totalGoals: 23,
    gamesPlayed: 17,
  },
  {
    id: 'juarez',
    name: 'FC Juárez',
    fullName: 'Fútbol Club Juárez',
    logoUrl: 'https://img.vavel.com/b/Bravos_de_Ciudad_Ju%C3%A1rez_Logo.png',
    foundationDate: '29 de mayo de 2015',
    stadium: 'Estadio Olímpico Benito Juárez',
    topScorers: [
        { name: 'Darío Lezcano', goals: 34 },
        { name: 'Gabriel Fernández', goals: 12 },
        { name: 'Diego Rolán', goals: 10 },
    ],
    titles: [
        '1 Ascenso MX',
    ],
    logoEvolutionUrl: 'https://img.vavel.com/b/Bravos_de_Ciudad_Ju%C3%A1rez_Logo.png',
    colors: {
        primary: '#4CAF50', // Green
        secondary: '#CE0E2D', // Red
        accent: '#FFFFFF',
        text: '#FFFFFF',
        textSecondary: '#000000',
    },
    squadSize: 27,
    foreignPlayers: 11,
    averageAge: 27.7,
    playerToWatch: {
        name: 'Aitor García',
        position: 'Extremo',
        description: 'El extremo español destaca por su velocidad y habilidad para encarar, aportando profundidad al ataque fronterizo.'
    },
    totalGoals: 18,
    gamesPlayed: 17,
  },
  {
    id: 'san_luis',
    name: 'Atlético San Luis',
    fullName: 'Club Atlético de San Luis',
    logoUrl: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/15720.png',
    foundationDate: '28 de mayo de 2013',
    stadium: 'Estadio Alfonso Lastras',
    topScorers: [
        { name: 'Nicolás Ibáñez', goals: 36 },
        { name: 'Germán Berterame', goals: 17 },
        { name: 'Unai Bilbao', goals: 10 },
    ],
    titles: [
        '2 Ascenso MX',
    ],
    logoEvolutionUrl: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/15720.png',
    colors: {
        primary: '#CE1126', // Red
        secondary: '#FFFFFF', // White
        accent: '#002D62', // Blue
        text: '#FFFFFF',
        textSecondary: '#002D62',
    },
    squadSize: 24,
    foreignPlayers: 9,
    averageAge: 26.9,
    playerToWatch: {
        name: 'Jhon Murillo',
        position: 'Extremo',
        description: 'Internacional venezolano cuya velocidad explosiva y capacidad de desborde son vitales para el juego ofensivo del equipo.'
    },
    totalGoals: 25,
    gamesPlayed: 17,
  },
  {
    id: 'mazatlan',
    name: 'Mazatlán FC',
    fullName: 'Mazatlán Fútbol Club',
    logoUrl: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/20702.png',
    foundationDate: '2 de junio de 2020',
    stadium: 'Estadio El Encanto',
    topScorers: [
        { name: 'Camilo Sanvezzo', goals: 21 },
        { name: 'Nicolás Benedetti', goals: 10 },
        { name: 'Aké Loba', goals: 9 },
    ],
    titles: [],
    logoEvolutionUrl: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/20702.png',
    colors: {
        primary: '#5E2163', // Purple
        secondary: '#00AEEF', // Light Blue
        accent: '#FFFFFF',
        text: '#FFFFFF',
        textSecondary: '#000000',
    },
    squadSize: 28,
    foreignPlayers: 12,
    averageAge: 27.2,
    playerToWatch: {
        name: 'Luis Amarilla',
        position: 'Delantero',
        description: 'Delantero paraguayo que es la principal referencia en el área, con un gran remate y capacidad para jugar de espaldas.'
    },
    totalGoals: 20,
    gamesPlayed: 17,
  },
];

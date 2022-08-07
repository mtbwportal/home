interface LeagueResult {
  key: string;
  place: number;
  team: string;
  wins: number;
  losses: number;
  ties: number;
  winPct: number;
  gb: number;
}

interface LeagueAllTimeResult extends LeagueResult {
  championships: number;
}

export const leagueAllTimeResults: LeagueAllTimeResult[] = [
  { key: 'hyd', place: 1, team: 'How ya DONNNN?', championships: 0, wins: 740, losses: 507, ties: 73, winPct: 0.588, gb: 0 },
  { key: 'boom', place: 2, team: 'Boomcity', championships: 2, wins: 691, losses: 554, ties: 75, winPct: 0.552, gb: 48 },
  { key: 'lrt', place: 3, team: `Low Rider's Team`, championships: 2, wins: 676, losses: 557, ties: 87, winPct: 0.545, gb: 57 },
  { key: 'atc', place: 4, team: 'All The Chickenheads', championships: 0, wins: 684, losses: 575, ties: 61, winPct: 0.541, gb: 62 },
  { key: 'ls', place: 5, team: 'Laser Show', championships: 0, wins: 658, losses: 593, ties: 69, winPct: 0.525, gb: 84 },
  { key: 'bubu', place: 6, team: 'Bubu', championships: 0, wins: 595, losses: 652, ties: 73, winPct: 0.478, gb: 145 },
  { key: 'ttt', place: 7, team: `Tim's Talentless Team`, championships: 0, wins: 601, losses: 660, ties: 59, winPct: 0.478, gb: 146 },
  { key: 'mb', place: 8, team: 'Mandelbaum', championships: 2, wins: 578, losses: 659, ties: 83, winPct: 0.469, gb: 157 },
  { key: 'ppd', place: 9, team: 'Pesky Pole Dancers', championships: 0, wins: 568, losses: 686, ties: 66, winPct: 0.455, gb: 175.5 },
  { key: 'nm', place: 10, team: 'Acuna Matata', championships: 0, wins: 176, losses: 232, ties: 32, winPct: 0.436, gb: 144.5 },
  { key: 'jl', place: 11, team: 'Cuban Defectors', championships: 0, wins: 170, losses: 243, ties: 27, winPct: 0.417, gb: 153 },
  { key: 'rebs', place: 12, team: 'Comeback SZN', championships: 0, wins: 506, losses: 725, ties: 89, winPct: 0.417, gb: 226 },
];

interface LeagueYearResult extends LeagueResult {
  moves: number;
}

// type LeagueYears = '2013' | '2014' | '2015' | '2016' | '2017' | '2018';

export const leagueYearResults: { [k: string]: LeagueYearResult[] } = {
  2018: [
    { key: 'lrt', place: 1, team: `Low Rider's Team`, wins: 117, losses: 93, ties: 10, winPct: 0.555, gb: 11, moves: 54 },
    { key: 'hyd', place: 2, team: 'How ya DONNNN?', wins: 129, losses: 83, ties: 8, winPct: 0.605, gb: 0, moves: 51 },
    { key: 'ttt', place: 3, team: `Tim's Talentless`, wins: 114, losses: 89, ties: 17, winPct: 0.557, gb: 10.5, moves: 40 },
    { key: 'rebs', place: 4, team: 'Comeback SZN', wins: 110, losses: 91, ties: 19, winPct: 0.543, gb: 13.5, moves: 55 },
    { key: 'jl', place: 5, team: 'Cuban Defectors', wins: 100, losses: 105, ties: 15, winPct: 0.489, gb: 25.5, moves: 53 },
    { key: 'atc', place: 6, team: 'All The Chickenheads', wins: 107, losses: 103, ties: 10, winPct: 0.509, gb: 21, moves: 55 },
    { key: 'boom', place: 7, team: 'Boomcity', wins: 113, losses: 96, ties: 11, winPct: 0.539, gb: 14.5, moves: 55 },
    { key: 'ls', place: 8, team: 'Laser Show', wins: 113, losses: 98, ties: 9, winPct: 0.534, gb: 15.5, moves: 46 },
    { key: 'mb', place: 9, team: 'Mandelbaum', wins: 91, losses: 112, ties: 17, winPct: 0.452, gb: 33.5, moves: 40 },
    { key: 'bubu', place: 10, team: 'Bubu', wins: 91, losses: 118, ties: 11, winPct: 0.439, gb: 36.5, moves: 43 },
    { key: 'nm', place: 11, team: 'Acuna Matata', wins: 82, losses: 120, ties: 18, winPct: 0.414, gb: 42, moves: 38 },
    { key: 'ppd', place: 12, team: 'Pesky Pole Dancers', wins: 73, losses: 132, ties: 15, winPct: 0.366, gb: 52.5, moves: 39 },
  ],
  2017: [
    { key: 'mb', place: 1, team: 'Mandelbaum', wins: 115, losses: 93, ties: 12, winPct: 0.550, gb: 4.5, moves: 55 },
    { key: 'ls', place: 2, team: 'Laser Show', wins: 118, losses: 87, ties: 15, winPct: 0.570, gb: 0, moves: 51 },
    { key: 'ttt', place: 3, team: `Tim's Talentless`, wins: 119, losses: 94, ties: 7, winPct: 0.557, gb: 3, moves: 49 },
    { key: 'bubu', place: 4, team: 'Bubu', wins: 115, losses: 98, ties: 7, winPct: 0.539, gb: 7, moves: 37 },
    { key: 'ppd', place: 5, team: 'Pesky Pole Dancers', wins: 111, losses: 96, ties: 13, winPct: 0.534, gb: 8, moves: 44 },
    { key: 'lrt', place: 6, team: `Low Rider's Team`, wins: 105, losses: 98, ties: 17, winPct: 0.516, gb: 12, moves: 53 },
    { key: 'hyd', place: 7, team: 'How ya DONNNN?', wins: 107, losses: 97, ties: 16, winPct: 0.523, gb: 10.5, moves: 55 },
    { key: 'atc', place: 8, team: 'All The Chickenheads', wins: 102, losses: 106, ties: 12, winPct: 0.491, gb: 17.5, moves: 46 },
    { key: 'boom', place: 9, team: 'Boomcity', wins: 99, losses: 109, ties: 12, winPct: 0.477, gb: 20.5, moves: 55 },
    { key: 'nm', place: 10, team: `Nick's Boss Team`, wins: 94, losses: 112, ties: 14, winPct: 0.459, gb: 24.5, moves: 31 },
    { key: 'rebs', place: 11, team: 'TITS out for da REBS', wins: 89, losses: 116, ties: 15, winPct: 0.439, gb: 29, moves: 17 },
    { key: 'jl', place: 12, team: 'Cuban Defectors', wins: 70, losses: 138, ties: 12, winPct: 0.345, gb: 49.5, moves: 46 },
  ],
  2016: [
    { key: 'boom', place: 1, team: 'Boomcity', wins: 134, losses: 73, ties: 13, winPct: 0.639, gb: 0, moves: 51 },
    { key: 'hyd', place: 2, team: 'How ya DONNNN?', wins: 132, losses: 75, ties: 13, winPct: 0.630, gb: 2, moves: 48 },
    { key: 'atc', place: 3, team: 'All The Chickenheads', wins: 136, losses: 77, ties: 7, winPct: 0.634, gb: 1, moves: 41 },
    { key: 'ls', place: 4, team: 'Laser Show', wins: 122, losses: 82, ties: 16, winPct: 0.591, gb: 10.5, moves: 40 },
    { key: 'lrt', place: 5, team: `Low Rider's Team`, wins: 122, losses: 86, ties: 12, winPct: 0.582, gb: 12.5, moves: 51 },
    { key: 'mb', place: 6, team: 'Mandelbaum', wins: 88, losses: 120, ties: 12, winPct: 0.427, gb: 46.5, moves: 55 },
    { key: 'rebs', place: 7, team: 'TITS out for da REBS', wins: 76, losses: 129, ties: 15, winPct: 0.380, gb: 57, moves: 35 },
    { key: 'bubu', place: 8, team: 'Bubu', wins: 79, losses: 129, ties: 12, winPct: 0.386, gb: 55.5, moves: 32 },
    { key: 'ppd', place: 9, team: 'Pesky Pole Dancers', wins: 79, losses: 137, ties: 4, winPct: 0.368, gb: 59.5, moves: 39 },
    { key: 'ttt', place: 10, team: `Tim's Talentless`, wins: 75, losses: 135, ties: 10, winPct: 0.364, gb: 60.5, moves: 49 },
  ],
  2015: [
    { key: 'lrt', place: 1, team: `Low Rider's Team`, wins: 112, losses: 82, ties: 26, winPct: 0.568, gb: 15.5, moves: 70 },
    { key: 'ppd', place: 2, team: 'Pesky Pole Dancers', wins: 113, losses: 92, ties: 15, winPct: 0.548, gb: 20, moves: 47 },
    { key: 'hyd', place: 3, team: 'How ya DONNNN?', wins: 135, losses: 74, ties: 11, winPct: 0.639, gb: 0, moves: 82 },
    { key: 'boom', place: 4, team: 'Boomcity', wins: 123, losses: 83, ties: 14, winPct: 0.591, gb: 10.5, moves: 87 },
    { key: 'atc', place: 5, team: 'All The Chickenheads', wins: 115, losses: 99, ties: 6, winPct: 0.536, gb: 22.5, moves: 68 },
    { key: 'rebs', place: 6, team: 'TITS out for da REBS', wins: 82, losses: 124, ties: 14, winPct: 0.405, gb: 51.5, moves: 38 },
    { key: 'ls', place: 7, team: 'Laser Show', wins: 112, losses: 97, ties: 11, winPct: 0.534, gb: 23, moves: 59 },
    { key: 'ttt', place: 8, team: `Tim's Talentless`, wins: 96, losses: 116, ties: 8, winPct: 0.455, gb: 40.5, moves: 65 },
    { key: 'bubu', place: 9, team: 'Bubu', wins: 81, losses: 125, ties: 14, winPct: 0.400, gb: 52.5, moves: 41 },
    { key: 'mb', place: 10, team: 'Mandelbaum', wins: 65, losses: 142, ties: 13, winPct: 0.325, gb: 69, moves: 33 },
  ],
  2014: [
    { key: 'boom', place: 1, team: 'Boomcity', wins: 119, losses: 90, ties: 11, winPct: 0.566, gb: 0, moves: 78 },
    { key: 'hyd', place: 2, team: 'How ya DONNNN?', wins: 116, losses: 89, ties: 15, winPct: 0.561, gb: 1, moves: 62 },
    { key: 'atc', place: 3, team: 'All The Chickenheads', wins: 112, losses: 95, ties: 13, winPct: 0.539, gb: 6, moves: 43 },
    { key: 'bubu', place: 4, team: 'Bubu', wins: 113, losses: 88, ties: 19, winPct: 0.557, gb: 2, moves: 37 },
    { key: 'lrt', place: 5, team: `Low Rider's Team`, wins: 110, losses: 99, ties: 11, winPct: 0.525, gb: 9, moves: 64 },
    { key: 'ppd', place: 6, team: 'Pesky Pole Dancers', wins: 101, losses: 108, ties: 11, winPct: 0.484, gb: 18, moves: 23 },
    { key: 'ttt', place: 7, team: `Tim's Talentless Team`, wins: 100, losses: 109, ties: 11, winPct: 0.480, gb: 19, moves: 56 },
    { key: 'mb', place: 8, team: 'Mandelbaum', wins: 96, losses: 106, ties: 18, winPct: 0.477, gb: 19.5, moves: 37 },
    { key: 'ls', place: 9, team: 'Laser Show', wins: 95, losses: 115, ties: 10, winPct: 0.455, gb: 24.5, moves: 28 },
    { key: 'rebs', place: 10, team: 'REBS', wins: 73, losses: 136, ties: 11, winPct: 0.357, gb: 46, moves: 38 },
  ],
  2013: [
    { key: 'mb', place: 1, team: 'Mandelbaum', wins: 123, losses: 86, ties: 11, winPct: 0.584, gb: 0, moves: 33 },
    { key: 'hyd', place: 2, team: 'How ya DONNNN?', wins: 121, losses: 89, ties: 10, winPct: 0.573, gb: 2.5, moves: 59 },
    { key: 'bubu', place: 3, team: 'Bubu', wins: 116, losses: 94, ties: 10, winPct: 0.550, gb: 7.5, moves: 28 },
    { key: 'atc', place: 4, team: 'All The Chickenheads', wins: 112, losses: 95, ties: 13, winPct: 0.539, gb: 10, moves: 47 },
    { key: 'boom', place: 5, team: 'Boomcity', wins: 103, losses: 103, ties: 14, winPct: 0.500, gb: 18.5, moves: 71 },
    { key: 'lrt', place: 6, team: `Low Rider's Team`, wins: 110, losses: 99, ties: 11, winPct: 0.525, gb: 13, moves: 35 },
    { key: 'ttt', place: 7, team: 'Team Testosterone', wins: 97, losses: 117, ties: 6, winPct: 0.455, gb: 28.5, moves: 10 },
    { key: 'ls', place: 8, team: 'Laser Show', wins: 98, losses: 114, ties: 8, winPct: 0.464, gb: 26.5, moves: 20 },
    { key: 'ppd', place: 9, team: 'Pesky Pole Dancers', wins: 91, losses: 121, ties: 8, winPct: 0.432, gb: 33.5, moves: 19 },
    { key: 'rebs', place: 10, team: 'REBS', wins: 76, losses: 129, ties: 15, winPct: 0.380, gb: 45, moves: 30 },
  ],
};

export interface YahooFantasyUser {
  guid: string;
  games: YahooFantasyGame[];
}

export interface YahooFantasyGame {
  id: number;
  key: number;
  name: string;
  code: string;
  type: string;
  url: string;
  season: number;
  registrationOver: boolean;
  gameOver: boolean;
  offseason: boolean;
  teams: YahooFantasyTeam[];
}

export interface YahooFantasyTeam {
  id: number;
  key: string;
  name: string;
  ownedByCurrentLogin: boolean;
  url: string;
  logos: YahooFantasyTeamLogo[];
  waiverPriority: number;
  numberOfMoves: number;
  numberOfTrades: number;
  rosterAdds: YahooFantasyTeamRosterAdds;
  leagueScoringType: string;
  draftGradeAvailable: boolean;
  auctionBudgetTotal?: number;
  auctionBudgetSpent?: number;
  managers: YahooFantasyTeamManager[];
}

export interface YahooFantasyTeamLogo {
  size: string;
  url: string;
}

export interface YahooFantasyTeamRosterAdds {
  coverageType: string;
  coverageValue: number;
  value: number;
}

export interface YahooFantasyTeamManager {
  id: number;
  nickname: string;
  guid: string;
  currentLogin: boolean;
  email: string;
  imageUrl: string;
}

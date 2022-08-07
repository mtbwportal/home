export interface AllTimeResult {
  _id?: string;
  managerId: string;
  place: number;
  championships: number;
  wins: number;
  losses: number;
  ties: number;
  winPct: number;
  gb: number;
}

export interface SeasonResult {
  _id?: string;
  year: number;
  managerId: string;
  teamId: string;
  place: number;
  wins: number;
  losses: number;
  ties: number;
  winPct: number;
  gb: number;
  moves: number;
}

export const initialResultsState: ResultsState = {
  loading: false,
  allTime: [],
  seasons: []
}

export interface ResultsState {
  loading: boolean;
  error?: Error;
  allTime: AllTimeResult[];
  seasons: SeasonResult[];
}

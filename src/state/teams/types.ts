export interface Manager {
  _id?: string;
  name: string;
  isCommish?: boolean;
  teams: string[];
}

export interface Team {
  _id?: string;
  managerId: string;
  name: string;
  year: number;
  wins: number;
  losses: number;
  ties: number;
  moves: number;
}

export const initialTeamsState: TeamsState = {
  loading: false,
  all: [],
  managers: [],
};

export interface TeamsState {
  loading: boolean;
  error?: Error;
  all: Team[];
  managers: Manager[];
}

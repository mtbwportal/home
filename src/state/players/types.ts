import BSON from 'bson';

export interface Player {
  _id: BSON.ObjectId;
  name: string;
  team: string;
  pos: string;
  prices: { [key: number]: number };
}

export const initialPlayersState: PlayersState = {
  loading: false,
};

export interface PlayersState {
  loading: boolean;
  error?: Error;
  all?: { [key: string]: Player };
}

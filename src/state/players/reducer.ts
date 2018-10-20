import { buildReducer, newAsyncActionHandler } from '../../util';
import { initialPlayersState, listPlayers, Player } from '.';

export default buildReducer(initialPlayersState, [
  newAsyncActionHandler(listPlayers.async, {
    onRequest: state => {
      state.loading = true;
      delete state.error;
    },
    onSuccess: (state, { result: players }) => {
      state.loading = false;
      state.all = players.reduce(
        (acc, { _id, ...rest }) => ({
          ...acc,
          [_id.toHexString()]: { _id, ...rest },
        }),
        {} as { [key: string]: Player }
      );
    },
    onFailure: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  }),
]);

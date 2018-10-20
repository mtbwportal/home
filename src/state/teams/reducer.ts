import { buildReducer, newAsyncActionHandler } from '../../util';
import { initialTeamsState, listTeams, listTeamManagers } from '.';

export default buildReducer(initialTeamsState, [
  newAsyncActionHandler(listTeams.async, {
    onRequest: state => {
      state.loading = true;
      delete state.error;
    },
    onSuccess: (state, { result: teams }) => {
      state.loading = false;
      state.all = teams;
    },
    onFailure: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  }),
  newAsyncActionHandler(listTeamManagers.async, {
    onRequest: state => {
      state.loading = true;
      delete state.error;
    },
    onSuccess: (state, { result: managers }) => {
      state.loading = false;
      state.managers = managers;
    },
    onFailure: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  }),
]);

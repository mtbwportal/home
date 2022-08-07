import { buildReducer, newAsyncActionHandler } from '../../util';
import { initialResultsState, listAllTimeResults, listSeasosnResults } from '.';

export default buildReducer(initialResultsState, [
  newAsyncActionHandler(listAllTimeResults.async, {
    onRequest: state => {
      state.loading = true;
      delete state.error;
    },
    onSuccess: (state, { result: allTime }) => {
      state.loading = false;
      state.allTime = allTime;
    },
    onFailure: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  }),
  newAsyncActionHandler(listSeasosnResults.async, {
    onRequest: state => {
      state.loading = true;
      delete state.error;
    },
    onSuccess: (state, { result: seasons }) => {
      state.loading = false;
      state.seasons = seasons;
    },
    onFailure: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  }),
]);

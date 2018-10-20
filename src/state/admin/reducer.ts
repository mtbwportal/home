import { buildReducer, newActionHandler } from '../../util';
import { initialAdminState, setCurrentPage } from '.';

export default buildReducer(initialAdminState, [
  newActionHandler(setCurrentPage, (state, page) => {
    state.currentPage = page;
  }),
]);

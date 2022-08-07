import { makesRootReducer } from '@makes-apps/lib';

import { authReducer, usersReducer, yahooReducer } from '../store';

export default makesRootReducer({
  auth: authReducer,
  users: usersReducer,
  yahoo: yahooReducer,
});

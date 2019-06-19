import { makesRootReducer } from '@makes-apps/lib';

import AuthReducer from '../store/auth';
import UsersReducer from '../store/users';
import YahooReducer from '../store/yahoo';

export default makesRootReducer({
  auth: AuthReducer,
  users: UsersReducer,
  yahoo: YahooReducer,
});

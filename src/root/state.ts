import { AuthState, LocalAppState, makesAppState } from '@makes-apps/lib';

import OFFLINE from '../offline';
import { User, UsersState, YahooState } from '../types';

import APP_LOCAL_KEY from './local_key';

const offlineUser = {
  user: {
    _id: '5c47fb0dbfbad34184d20a27',
    email: 'nick@makes.life',
    type: 'me',
    name: 'nickmakes',
    deleted: false,
    activity: [
      { type: 'create', timestamp: '2019-01-23T05:26:36.722Z' },
      { type: 'login', timestamp: '2019-08-25T02:39:15.354Z' },
    ],
  },
};

const initialState = LocalAppState.read(APP_LOCAL_KEY) || {};

const AppState = makesAppState({
  auth: new AuthState<User>(OFFLINE ? offlineUser : initialState.user),
  users: new UsersState(),
  yahoo: new YahooState(),
});
interface AppState extends ReturnType<typeof AppState> {}

export default AppState;

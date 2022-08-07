import { RootContext } from './root';
import { User } from './types';

export default (stitch: RootContext) => {
  const dbProvider = (name: string) => stitch.clients().db('mongo', name);
  return {
    app: () => {
      const db = dbProvider('app');
      return {
        yahoo: () => db.collection<any>('yahoo'),
      };
    },
    auth: () => {
      const db = dbProvider('auth');
      return {
        users: () => db.collection<User>('users'),
      };
    },
  };
};

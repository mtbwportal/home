import { urls } from '@makes-apps/lib';

export default {
  welcome: () => '/welcome',
  home: () => '/',
  admin: () => '/admin',

  auth: urls.auth(),

  // users: () => {
  //   const base = '/users';
  //   return {
  //     page: () => base,
  //     find: (id = ':userId', full = false) => (full ? `${base}/${id}` : '/' + id),
  //   };
  // },

  users: () => '/users',
  profile: () => '/profile',

  yahoo: () => {
    const base = '/yahoo';
    return {
      page: () => base,
      login: (full = false) => (full ? base + '/login' : '/login'),
      oauth: (full = false) => (full ? base + '/oauth' : '/oauth'),
    };
  },
};

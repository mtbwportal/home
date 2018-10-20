export const urls = {
  welcome: () => '/',
  login: () => '/login',
  home: () => '/home',
  players: () => '/players',
  teams: () => '/teams',
  team: (id: string) => `/teams/${id}`,
  results: () => '/results',
  rules: () => '/rules',
};

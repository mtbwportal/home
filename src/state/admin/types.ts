import { urls } from '../../util';

export enum AppPage {
  WELCOME = 'welcome',
  LOGIN = 'login',
  HOME = 'home',
  RULES = 'rules',
  TEAMS = 'teams',
  PLAYERS = 'players',
  RESULTS = 'results',
  NOT_FOUND = 'not found',
}

export const initialAdminState: AdminState = {};

export interface AdminState {
  currentPage?: AppPage;
}

export const siteMap = {
  [urls.welcome()]: AppPage.WELCOME,
  [urls.login()]: AppPage.LOGIN,
  [urls.home()]: AppPage.HOME,
  [urls.rules()]: AppPage.RULES,
  [urls.teams()]: AppPage.TEAMS,
  [urls.players()]: AppPage.PLAYERS,
  [urls.results()]: AppPage.RESULTS,
};

export const appPage = (path: string) => siteMap[path] || AppPage.NOT_FOUND;
export const appUrl = (page: AppPage) => {
  const urls = Object.keys(siteMap);
  let url = '/not_a_page';
  for (let i = 0; i < urls.length; i++) {
    const key = urls[i];
    const appPage = siteMap[key];
    console.log(`${key}: does ${appPage} === ${page} ?`);
    if (page === appPage) {
      url = key;
      break;
    }
  }
  return url;
};

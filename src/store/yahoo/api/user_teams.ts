import {
  YahooFantasyGame,
  YahooFantasyTeam,
  YahooFantasyTeamLogo,
  YahooFantasyTeamManager,
  YahooFantasyTeamRosterAdds,
  YahooFantasyUser,
} from './types';
import { mustHaveBooleanValue, mustHaveNumberValue, mustHaveStringValue, mightHaveNumberValue } from './utils';

export const parseUsers = (root: Document) => {
  const users: YahooFantasyUser[] = [];

  const allUsers = root.getElementsByTagName('user');
  for (let i = 0; i < allUsers.length; i++) {
    const user = allUsers.item(i);
    if (user) {
      users.push(parseUser(user));
    }
  }

  return users;
};

export const parseUser = (user: Element): YahooFantasyUser => {
  const guid = mustHaveStringValue(user, 'guid');
  const games: YahooFantasyGame[] = [];

  const allGames = user
    .getElementsByTagName('games')
    .item(0)!
    .getElementsByTagName('game');
  for (let i = 0; i < allGames.length; i++) {
    games.push(parseGame(allGames.item(i)!));
  }

  return { guid, games };
};

export const parseGame = (game: Element): YahooFantasyGame => {
  const id = mustHaveNumberValue(game, 'game_id');
  const key = mustHaveNumberValue(game, 'game_key');
  const name = mustHaveStringValue(game, 'name');
  const code = mustHaveStringValue(game, 'code');
  const type = mustHaveStringValue(game, 'type');
  const url = mustHaveStringValue(game, 'url');
  const season = mustHaveNumberValue(game, 'season');
  const registrationOver = mustHaveBooleanValue(game, 'is_registration_over');
  const gameOver = mustHaveBooleanValue(game, 'is_game_over');
  const offseason = mustHaveBooleanValue(game, 'is_offseason');
  const teams: YahooFantasyTeam[] = [];

  const allTeams = game
    .getElementsByTagName('teams')
    .item(0)!
    .getElementsByTagName('team');
  for (let i = 0; i < allTeams.length; i++) {
    teams.push(parseTeam(allTeams.item(i)!));
  }

  return {
    id,
    key,
    name,
    code,
    type,
    url,
    season,
    registrationOver,
    gameOver,
    offseason,
    teams,
  };
};

export const parseTeam = (team: Element): YahooFantasyTeam => {
  const id = mustHaveNumberValue(team, 'team_id');
  const key = mustHaveStringValue(team, 'team_key');
  const name = mustHaveStringValue(team, 'name');
  const ownedByCurrentLogin = mustHaveBooleanValue(team, 'is_owned_by_current_login');
  const url = mustHaveStringValue(team, 'url');
  const logos: YahooFantasyTeamLogo[] = [];
  const waiverPriority = mustHaveNumberValue(team, 'waiver_priority');
  const numberOfMoves = mustHaveNumberValue(team, 'number_of_moves');
  const numberOfTrades = mustHaveNumberValue(team, 'number_of_trades');
  const rosterAdds = parseTeamRosterAdds(team.getElementsByTagName('roster_adds').item(0)!);
  const leagueScoringType = mustHaveStringValue(team, 'league_scoring_type');
  const draftGradeAvailable = mustHaveBooleanValue(team, 'has_draft_grade');
  const auctionBudgetTotal = mightHaveNumberValue(team, 'auction_budget_total');
  const auctionBudgetSpent = mightHaveNumberValue(team, 'auction_budget_spent');
  const managers: YahooFantasyTeamManager[] = [];

  const allLogos = team
    .getElementsByTagName('team_logos')
    .item(0)!
    .getElementsByTagName('team_logo');
  for (let i = 0; i < allLogos.length; i++) {
    logos.push(parseTeamLogo(allLogos.item(i)!));
  }

  const allManagers = team
    .getElementsByTagName('managers')
    .item(0)!
    .getElementsByTagName('manager');
  for (let i = 0; i < allManagers.length; i++) {
    managers.push(parseTeamManager(allManagers.item(i)!));
  }

  return {
    id,
    key,
    name,
    ownedByCurrentLogin,
    url,
    logos,
    waiverPriority,
    numberOfMoves,
    numberOfTrades,
    rosterAdds,
    leagueScoringType,
    draftGradeAvailable,
    auctionBudgetTotal,
    auctionBudgetSpent,
    managers,
  };
};

export const parseTeamLogo = (logo: Element): YahooFantasyTeamLogo => {
  const size = mustHaveStringValue(logo, 'size');
  const url = mustHaveStringValue(logo, 'url');
  return { size, url };
};

export const parseTeamRosterAdds = (rosterAdds: Element): YahooFantasyTeamRosterAdds => {
  const coverageType = mustHaveStringValue(rosterAdds, 'coverage_type');
  const coverageValue = mustHaveNumberValue(rosterAdds, 'coverage_value');
  const value = mustHaveNumberValue(rosterAdds, 'value');
  return { coverageType, coverageValue, value };
};

export const parseTeamManager = (manager: Element): YahooFantasyTeamManager => {
  const id = mustHaveNumberValue(manager, 'manager_id');
  const nickname = mustHaveStringValue(manager, 'nickname');
  const guid = mustHaveStringValue(manager, 'guid');
  const currentLogin = mustHaveBooleanValue(manager, 'is_current_login');
  const email = mustHaveStringValue(manager, 'email');
  const imageUrl = mustHaveStringValue(manager, 'image_url');
  return { id, nickname, guid, currentLogin, email, imageUrl };
};

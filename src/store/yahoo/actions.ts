import appActions from '../../actions';
import { RootContext, RootState } from '../../root';
import { parseUsers, YahooFantasyUser, YahooState, YahooOauth } from '../../types';

const factory = appActions.app().forNamespace<YahooState>(YahooState.NAMESPACE);

export const getToken = factory
  .withType('get oauth token')
  .asThunk<[string], YahooOauth>(code => (_dispatch, _getState, stitch) =>
    stitch.stitch.callFunction('getYahooOauthToken', [code])
  )
  .withReducer((state, action) => {
    if (action.status === 'success') {
      return { ...state, oauth: action.payload };
    }
    return state;
  });

const makeYahooApiRequest = ({ yahoo }: RootState, { stitch }: RootContext, url: string): Promise<string> =>
  stitch.callFunction('makeYahooApiRequest', [url, yahoo.oauth ? yahoo.oauth.access_token : '']);

export const getUserBaseballTeams = factory
  .withType('get user baseball teams')
  .asThunk<[], YahooFantasyUser[]>(() => (_dispatch, getState, stitch) =>
    makeYahooApiRequest(
      getState(),
      stitch,
      'https://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=mlb/teams'
    ).then(res => parseUsers(new DOMParser().parseFromString(res, 'application/xml')))
  )
  .withReducer((state, action) => {
    if (action.status === 'success') {
      return { ...state, users: action.payload };
    }
    return state;
  });

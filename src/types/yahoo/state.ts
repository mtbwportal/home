import { YahooFantasyUser } from './api';
import { YahooOauth } from './oauth';

class State {
  static NAMESPACE = 'yahoo';

  constructor(
    public oauth: YahooOauth | undefined = undefined,
    public users: YahooFantasyUser[] = []
  ) {}
}

export default State;

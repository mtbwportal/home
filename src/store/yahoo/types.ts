export interface YahooOauth {
  access_token: string;
  id_token: string;
  expires_in: number;
  token_type: string;
  refresh_token: string;
  xoauth_yahoo_guid: string;
}

export class State {
  static NAMESPACE = 'yahoo';

  constructor(
    public oauth: YahooOauth | undefined = undefined
  ) {}
}

import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import queryString from 'querystring';

import { Button, StackedPage } from '@makes-apps/lib';

import AppState from '../app/state';
import { getLeagues, getToken, YahooOauth } from '../store/yahoo';

interface StateProps {
  oauth?: YahooOauth;
  search?: string;
}

interface DispatchProps {
  getYahooOauth: (code: string) => Promise<void>;
  getLeagues: (accessToken: string) => Promise<void>;
}

type Props = StateProps & DispatchProps;

const parseCode = (search: string): string => {
  const { code } = queryString.parse(search);
  if (typeof code !== 'string') {
    throw new Error('oh noz! it seems the yahoo oauth code was returned as a string');
  }
  return code;
};

class YahooCallbackPage extends React.Component<Props> {
  render() {
    const { getLeagues, getYahooOauth, oauth, search } = this.props;
    if (search) {
      const code = parseCode(search);
      return (
        <StackedPage title="callback">
          <Button as="button" onClick={() => getYahooOauth(code)}>
            get oauth!
          </Button>
          <Button as="button" onClick={() => getLeagues(oauth ? oauth.access_token : '')}>
            try request
          </Button>
        </StackedPage>
      );
    }
    return (
      <StackedPage title="callback">
        <Button as="button">what now</Button>
      </StackedPage>
    );
  }
}

const mapStateToProps = ({ router, yahoo }: AppState) => {
  const search = router.location.search;
  return {
    oauth: yahoo.oauth,
    search: search.charAt(0) === '?' ? search.substring(1) : search,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getYahooOauth: (code: string) => dispatch<any>(getToken.creator.worker(code)),
  getLeagues: (accessToken: string) => dispatch<any>(getLeagues.creator.worker(accessToken)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YahooCallbackPage);

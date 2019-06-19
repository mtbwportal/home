import React from 'react';
import { Button, StackedPage } from '@makes-apps/lib';

const CLIENT_ID = 'dj0yJmk9QldmaHlwRmc4ODI3JmQ9WVdrOU5FMTBSemd5TlRBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWQ1';
const REDIRECT_URI = 'http://localhost:8080/callback';

const authUrl = `https://api.login.yahoo.com/oauth2/request_auth?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=openid&nonce=01234567890`;

const YahooLoginPage = () => (
  <StackedPage title="login" menu={[{ type: 'link', display: 'login', to: '' }]}>
    <Button
      as="button"
      onClick={() => {
        window.location.href = authUrl;
      }}
    >
      Login
    </Button>
  </StackedPage>
);

export default YahooLoginPage;

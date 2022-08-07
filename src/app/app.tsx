import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { adminActions, routerActions, Alert, AppProvider, StackedLayout } from '@makes-apps/lib';

import { Logo } from '../components';
import { connectors } from '../root';
import { authActions } from '../store';
import { User } from '../types';
import urls from '../urls';

import Routes from './routes';

interface StateProps {
  alerts: Alert[];
  user?: User;
  working: number;
}

interface DispatchProps {
  ackAlert: () => void;
  goto: (url: string) => void;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  sendEmailConfirmation: (email: string) => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  confirmEmail: (token: string, tokenId: string) => Promise<void>;
  resetPassword: (token: string, tokenId: string, password: string) => Promise<void>;
}

type Props = StateProps & DispatchProps & RouteComponentProps;

class AppLayout extends React.Component<Props> {
  render() {
    const {
      ackAlert,
      location: { pathname: currentRoute },
      login,
      logout,
      register,
      sendEmailConfirmation,
      sendPasswordReset,
      confirmEmail,
      resetPassword,
      user,
      alerts,
      working,
    } = this.props;

    const authActions = {
      login,
      logout,
      register,
      sendConfirmationEmail: sendEmailConfirmation,
      sendPasswordResetEmail: sendPasswordReset,
      confirmEmail,
      resetPassword,
    };

    const nav: { [key: string]: string } = {};
    if (user && user.type === 'me') {
      nav[urls.admin()] = 'admin';
    }
    nav[urls.home()] = 'home';

    return (
      <AppProvider
        name="shake-on-it"
        options={{
          primaryColor: 'green',
          secondaryColor: 'gray',
          logoFont: 'Stint Ultra Expanded, serif',
          headingFont: 'Fira Sans, sans-serif',
          bodyFont: 'Cantarell, serif',
        }}
      >
        <StackedLayout
          ackAlert={ackAlert}
          alerts={alerts}
          credits={[
            { icon: 'GithubIcon', href: 'https://github.com/mtbwportal/home', text: 'Github' },
            { icon: 'MongodbIcon', href: 'https://cloud.mongodb.com', text: 'MongoDB' },
          ]}
          currentRoute={currentRoute}
          emailConfirmationlUrl={urls.auth().confirmation()}
          loginUrl={urls.auth().login()}
          logo={{
            to: urls.welcome(),
            render: ({ atLeastMega }) => (atLeastMega ? <Logo /> : <Logo />),
          }}
          logout={logout}
          mantra={null}
          navbar={nav}
          passwordResetUrl={urls.auth().passwordReset()}
          profileUrl={urls.profile()}
          registerUrl={urls.auth().register()}
          user={user}
          working={working > 0}
        >
          <Routes authActions={authActions} user={user} />
        </StackedLayout>
      </AppProvider>
    );
  }
}

export default withRouter(
  connectors.withDispatchObject(
    ({ admin, auth }) => ({
      alerts: admin.alerts,
      user: auth.user,
      working: admin.working,
    }),
    {
      ackAlert: adminActions.ackAlert,
      goto: routerActions.goto,
      login: authActions.login.creator.worker,
      logout: authActions.logout.creator.worker,
      register: authActions.register.creator.worker,
      sendEmailConfirmation: authActions.sendConfirmationEmail.creator.worker,
      sendPasswordReset: authActions.sendPasswordResetEmail.creator.worker,
      confirmEmail: authActions.confirmEmail.creator.worker,
      resetPassword: authActions.resetPassword.creator.worker,
    }
  )(AppLayout)
);

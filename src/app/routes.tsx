import React from 'react';
import Loadable from 'react-loadable';
import { AuthRoutes, AuthRoute, LoadingPage } from '@makes-apps/lib';
import { User } from '../store/users';
import AppUrls from './urls';

const WelcomePage = Loadable({
  loader: () => import('../pages').then(module => module.WelcomePage),
  loading: LoadingPage,
});
const HomePage = Loadable({
  loader: () => import('../pages').then(module => module.HomePage),
  loading: LoadingPage,
});
const AdminPage = Loadable({
  loader: () => import('../pages').then(module => module.AdminPage),
  loading: LoadingPage,
});
const UsersPage = Loadable({
  loader: () => import('../pages').then(module => module.UsersPage),
  loading: LoadingPage,
});
const YahooLoginPage = Loadable({
  loader: () => import('../pages').then(module => module.YahooLoginPage),
  loading: LoadingPage,
});
const YahooCallbackPage = Loadable({
  loader: () => import('../pages').then(module => module.YahooCallbackPage),
  loading: LoadingPage,
});
const LoginPage = Loadable({
  loader: () => import('@makes-apps/lib').then(module => module.StackedLoginPage),
  loading: LoadingPage,
});
const RegisterPage = Loadable({
  loader: () => import('@makes-apps/lib').then(module => module.StackedRegisterPage),
  loading: LoadingPage,
});
const EmailConfirmationPage = Loadable({
  loader: () => import('@makes-apps/lib').then(module => module.StackedEmailConfirmationPage),
  loading: LoadingPage,
});
const PasswordResetPage = Loadable({
  loader: () => import('@makes-apps/lib').then(module => module.StackedPasswordResetPage),
  loading: LoadingPage,
});
const ConfirmEmailPage = Loadable({
  loader: () => import('@makes-apps/lib').then(module => module.StackedConfirmEmailPage),
  loading: LoadingPage,
});
const ResetPasswordPage = Loadable({
  loader: () => import('@makes-apps/lib').then(module => module.StackedResetPasswordPage),
  loading: LoadingPage,
});

const NotFoundPage = Loadable({
  loader: () => import('@makes-apps/lib').then(module => module.NotFoundPage),
  loading: LoadingPage,
});

interface Props {
  redirects: { standard: string; reverse: string };
  user?: User;
  login: (email: string, password: string) => Promise<any>;
  register: (email: string, password: string) => Promise<void>;
  sendConfirmationEmail: (email: string) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  confirmEmail: (token: string, tokenId: string) => Promise<void>;
  resetPassword: (token: string, tokenId: string, password: string) => Promise<void>;
}

const AppRoutes = ({
  redirects,
  user,
  login,
  register,
  sendConfirmationEmail,
  sendPasswordResetEmail,
  confirmEmail,
  resetPassword,
}: Props) => (
  <AuthRoutes redirects={redirects} user={user}>
    <AuthRoute open path={AppUrls.welcome} component={WelcomePage} />
    <AuthRoute exact path={AppUrls.home} component={HomePage} />
    <AuthRoute exact path={AppUrls.admin} component={AdminPage} />
    <AuthRoute path={AppUrls.users.list} component={UsersPage} />} />
    <AuthRoute
      reverse
      redirectTo={AppUrls.home}
      path={AppUrls.auth.login}
      render={() => (
        <LoginPage login={login} urls={{ register: AppUrls.auth.register, confirm: AppUrls.auth.confirmation }} />
      )}
    />
    <AuthRoute
      reverse
      path={AppUrls.auth.register}
      render={() => (
        <RegisterPage register={register} urls={{ login: AppUrls.auth.login, confirm: AppUrls.auth.confirmation }} />
      )}
    />
    <AuthRoute
      reverse
      path={AppUrls.auth.confirmation}
      render={() => (
        <EmailConfirmationPage
          sendEmailConfirmation={sendConfirmationEmail}
          urls={{ login: AppUrls.auth.login, register: AppUrls.auth.register }}
        />
      )}
    />
    <AuthRoute
      open
      path={AppUrls.auth.passwordReset}
      render={() => (
        <PasswordResetPage
          sendPasswordReset={sendPasswordResetEmail}
          urls={{ login: AppUrls.auth.login, register: AppUrls.auth.register }}
        />
      )}
    />
    <AuthRoute
      open
      path={AppUrls.auth.confirmEmail}
      render={({ location }) => (
        <ConfirmEmailPage search={location.search} confirmEmail={confirmEmail} urls={{ login: AppUrls.auth.login }} />
      )}
    />
    <AuthRoute
      open
      path={AppUrls.auth.resetPassword}
      render={({ location }) => (
        <ResetPasswordPage
          search={location.search}
          resetPassword={resetPassword}
          urls={{ home: AppUrls.home, user: AppUrls.users.list }}
        />
      )}
    />
    <AuthRoute open path={AppUrls.yahoo.login} component={YahooLoginPage} />
    <AuthRoute open path={AppUrls.yahoo.callback} component={YahooCallbackPage} />
    <AuthRoute component={NotFoundPage} />
  </AuthRoutes>
);

export default AppRoutes;

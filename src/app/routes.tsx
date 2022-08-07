import React from 'react';
import { AuthActions, Loadable, Route, StackedRoutes } from '@makes-apps/lib';

import { User } from '../types/users';
import urls from '../urls';

const WelcomePage = Loadable(() => import('../pages').then(module => module.WelcomePage));
const HomePage = Loadable(() => import('../pages').then(module => module.HomePage));
const AdminPage = Loadable(() => import('../pages').then(module => module.AdminPage));
const ProfilePage = Loadable(() => import('../pages').then(module => module.ProfilePage));
const UsersPage = Loadable(() => import('../pages').then(module => module.UsersPage));
const YahooPage = Loadable(() => import('../pages').then(module => module.YahooPage));

interface Props {
  authActions: AuthActions;
  user?: User;
}

const Routes = ({authActions, user}: Props) => (
  <StackedRoutes
    authActions={authActions}
    authUrls={urls.auth()}
    homeUrl={urls.home()}
    user={user}
    omitErrorBoundary
    welcomeUrl={urls.welcome()}
  >
    <Route exact access="open" path={urls.welcome()} component={WelcomePage} />
    <Route exact path={urls.home()} component={HomePage} />
    <Route exact path={urls.admin()} component={AdminPage} />
    <Route exact path={urls.profile()} component={ProfilePage} />
    <Route exact path={urls.users()} component={UsersPage} />
    <Route exact path={urls.yahoo().page()} component={YahooPage} />
  </StackedRoutes>
)

export default Routes

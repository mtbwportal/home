import React from 'react';
import { routerActions, Database } from '@makes-apps/lib';

import { connectors } from '../../root';
import { User } from '../../types';

import Page from './page';

interface StateProps {
  goto: (url: string) => void;
  user?: User;
  users: Database<User>;
}

interface DispatchProps {}

type Props = StateProps & DispatchProps;

class ProfilePage extends React.Component<Props> {
  render() {
    const { goto, user, users } = this.props;

    if (!user) {
      return <>loading...</>;
    }

    return <Page goto={goto} user={user} users={users} />;
  }
}

export default connectors.withDispatchObject(
  ({ auth, users }) => ({
    user: auth.user,
    users: users.db,
  }),
  {
    goto: routerActions.goto,
  }
)(ProfilePage);

import React from 'react';
import { useHeadline, Database, DataTable, Flex } from '@makes-apps/lib';

import { User } from '../../types';
import urls from '../../urls';

interface Props {
  goto: (url: string) => void;
  user: User;
  users: Database<User>;
}

const Page = ({ goto, user, users }: Props) => {
  const { setHeadline } = useHeadline();

  React.useEffect(() => {
    const originalHeadline = setHeadline('User Profile');
    return () => {
      setHeadline(originalHeadline);
    };
  }, [user, users]);

  return (
    <Flex flexGrow="1" direction="column" alignItems="center" overflow="auto">
      <DataTable
        fluid
        columns={[{ header: 'firstName' }, { header: 'lastName' }]}
        data={Object.values(users || {})}
        onRowClick={(u, e) => {
          e.preventDefault();
          if (user && u._id.toHexString() === user._id.toHexString()) {
            goto(urls.profile());
          }
        }}
      />
    </Flex>
  );
};

export default Page;

import React from 'react';
import { useHeadline, Flex, Heading, Text, Wrapping } from '@makes-apps/lib';

interface Props {}

export default ({  }: Props) => {
  const { setHeadline } = useHeadline();
  React.useEffect(() => {
    const headline = setHeadline(
      <Heading as="h3" color="secondary" noMargin>
        Admin Page
      </Heading>
    );
    return () => {
      setHeadline(headline);
    };
  }, []);

  return (
    <Wrapping limit={61.8} centered>
      <Flex direction="column" alignItems="center">
        <Text>i'm the admin page</Text>
      </Flex>
    </Wrapping>
  );
};

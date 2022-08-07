import React from 'react';
import { resolveColor, useHeadline, Button, Flex, Heading, Text, Wrapping } from '@makes-apps/lib';

import urls from '../../urls';

interface Props {}

export default ({  }: Props) => {
  const { setHeadline } = useHeadline();
  React.useEffect(() => {
    const headline = setHeadline(
      <Heading as="h3" color="secondary" noMargin>
        MTBW Portal
      </Heading>
    );
    return () => {
      setHeadline(headline);
    };
  }, []);

  return (
    <Wrapping limit={61.8} centered>
      <Flex direction="column" alignItems="center">
        <Heading color="primary" font="logo">
          Welcome!
        </Heading>
        <Flex
          direction="column"
          border={theme => `1px solid ${resolveColor(theme, 'font')}`}
          borderRadius={theme => theme.spacers.pixels.pico}
          padding="1rem"
        >
          <Heading as="h4" color="primary">
            League Rules
          </Heading>
          <Text>Stay competitive</Text>
          <Text noMargin>Maximum 55 moves per season</Text>
          <Text>Maximum 5 moves per week</Text>
          <Text>Salary cap increases $20 each season</Text>
          <Text>Keep up to 17 players</Text>
        </Flex>
        <Flex
          margin="2rem"
          padding="1rem"
          border={theme => `1px solid ${resolveColor(theme, 'font')}`}
          borderRadius={theme => theme.spacers.pixels.pico}
          alignItems="stretch"
          wrap="wrap"
        >
          <Flex direction="column" flex="1" padding="0.5rem" justifyContent="space-between" flexBasis="320px">
            <Flex direction="column">
              <Heading as="h5" color="primary">
                The Portal
              </Heading>
              <Text>Once you sync with Yahoo, The Portal will gather live data about your team for the league</Text>
            </Flex>
            <Button as="Link" to={urls.home()} variant="text" color="primary">
              Let's go!
            </Button>
          </Flex>
          <Flex direction="column" flex="1" padding="0.5rem" justifyContent="space-between" flexBasis="320px">
            <Flex direction="column">
              <Heading as="h5" color="primary">
                Sync With Yahoo
              </Heading>
              <Text>Access your Yahoo data by linking your account here</Text>
            </Flex>
            <Button as="Link" to={urls.home()} variant="text" color="primary">
              Sure thing!
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Wrapping>
  );
};

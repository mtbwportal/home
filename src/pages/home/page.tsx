import React from 'react';
import {
  useHeadline,
  useToolbar,
  Heading,
  LayoutStateMenu,
  Wrapping,
} from '@makes-apps/lib';

import About from './about';
import Faq from './faq';
import Settings from './settings';

type View = 'about' | 'faq' | 'settings';

interface Props {}

export default ({  }: Props) => {
  const [view, setView] = React.useState<View>('about');

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

  const { setToolbar } = useToolbar();
  React.useEffect(() => {
    const toolbar = setToolbar(
      <LayoutStateMenu
        activeView={view}
        setView={(view = 'about') => setView(view)}
        viewLabels={{ about: 'about', faq: 'faq', settings: 'settings' }}
      />
    );
    return () => {
      setToolbar(toolbar);
    };
  });

  return (
    <Wrapping limit={61.8} centered>
      {view === 'about' && <About />}
      {view === 'faq' && <Faq />}
      {view === 'settings' && <Settings />}
    </Wrapping>
  );
};

import React from 'react';
import { Avatar, ContentCard, Footer, NavigationLink } from '../';
import { Flex } from '../base';

export type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export function Layout(props: LayoutProps) {
  const { title, ...other } = props;
  const careerDescription =
    title === 'Career' ? (
      <>
        {"This is a shortened version of Ashley's resume. Please reach out via the "}
        <NavigationLink to="/contact" sx={{ fontStyle: 'italic', fontSize: '16px' }}>
          {'Contact'}
        </NavigationLink>{' '}
        page for a pdf.
      </>
    ) : undefined;
  const homeDescription =
    title === 'Ashley David'
      ? 'Transforming software landscapes: Merging creativity, expertise, and growth for exceptional results.'
      : undefined;

  const variant = title !== 'Ashley David' ? 'main' : 'home';
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: ['space-between', 'space-between', 'space-between', 'center'],
      }}
    >
      <Flex
        sx={{
          flexDirection: ['column', 'column', 'column', 'row'],
          marginLeft: '20px',
          paddingRight: '20px',
          marginTop: [variant !== 'home' ? -190 : -215, variant !== 'home' ? -200 : -222, -248, 0],
          paddingBottom: [0, 0, 0, 80],
          maxWidth: ['unset', 'unset', 'unset', 1600],
          height: ['100%', '100%', '100%', 'unset'],
        }}
      >
        <Avatar variant={variant} />
        <ContentCard
          description={careerDescription || homeDescription}
          variant={variant}
          title={title}
          {...other}
        />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Layout;

import React from 'react';
import { Box, Divider, Flex, Typography } from '../base';
import { NavigationMenu } from '../';
import { useLocation } from 'react-router-dom';

export type ContentCardProps = {
  children: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  variant: 'main' | 'home';
};

export function ContentCard(props: ContentCardProps) {
  const { children, description, title, variant, ...other } = props;
  const { pathname } = useLocation();

  // Scroll to the top when route changes
  React.useEffect(() => {
    // Desktop
    document.getElementsByClassName('content')[0]?.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <Box
      sx={{
        marginLeft: [0, 0, 0, variant !== 'home' ? 180 : 128],
        marginTop: [variant !== 'home' ? 132 : 160, 160, 160, 0],
      }}
    >
      <Flex
        as="header"
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography as="h1" variant="h1" sx={{ fontSize: [44, 44, 44, 76] }}>
            {title}
          </Typography>
        </Box>
        <NavigationMenu />
      </Flex>
      <Divider />
      <Box
        as="main"
        className="content"
        sx={{
          height: ['100%', '100%', '100%', '70vh'],
          overflowY: 'scroll',
          paddingRight: 3,
        }}
        {...other}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontStyle: 'italic',
              fontSize: ['12px', 'inherit'],
              lineHeight: ['12px', 'inherit'],
            }}
          >
            {description}
          </Typography>
        </Box>
        {children}
      </Box>
    </Box>
  );
}

export default ContentCard;

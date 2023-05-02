import React from 'react';
import { Box, Card, Flex, Typography } from './base';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import { useLocation } from 'react-router-dom';
import { Divider } from 'theme-ui';

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
    document.getElementsByClassName('content')[0]?.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <Card>
      <Box
        sx={{
          marginLeft: [0, 0, 0, variant !== 'home' ? 180 : 128],
          marginTop: [variant !== 'home' ? 132 : 160, 160, 160, 0],
        }}
      >
        <Flex
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h1" sx={{ fontSize: [44, 44, 44, 64] }}>
              {title}
            </Typography>
          </Box>
          <NavigationMenu />
        </Flex>
        <Divider />
        <Box
          className="content"
          sx={{
            height: [variant !== 'home' ? '36vh' : '34vh', '36vh', '36vh', '58vh'],
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
    </Card>
  );
}

export default ContentCard;

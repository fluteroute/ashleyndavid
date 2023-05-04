import React from 'react';
import { Box, Flex, Image } from '../base';

export type AvatarProps = {
  variant: 'main' | 'home';
};

export function Avatar(props: AvatarProps) {
  const { variant } = props;
  return (
    <Box
      sx={{
        alignSelf: 'center',
        marginBottom: ['-50px', '-50px', '-50px', 0],
        marginLeft: [0, 0, 0, '-110px'],
        position: 'relative',
        transition: 'all 0.5s linear',
        ...(variant !== 'home'
          ? {
              top: ['8em', '8em', '8em', 'unset'],
              left: ['none', 'none', 'none', 'unset'],
              transform: [
                'translateY(1px) translateX(1px)',
                'translateY(1px) translateX(1px)',
                'translateY(1px) translateX(1px)',
                'translateY(-26em) translateX(13em)',
              ],
              maxWidth: [220, 220, 220, 280],
              minWidth: ['unset', 'unset', 280, 280],
            }
          : {
              top: ['15em', '15em', '17em', '5em'],
              left: ['none', 'none', 'none', '6em'],
              maxWidth: [220, 280, 280, 554],
              minWidth: ['unset', 'unset', 280, 448],
            }),
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Image
          alt="Ashley's Avatar"
          src="avatar.jpeg"
          sx={{
            borderRadius: 400,
            flexBasis: 'auto',
            transition: 'all 0.5s linear',
            ...(variant !== 'home'
              ? {
                  opacity: 0,
                  flexShrink: 0,
                  marginTop: '-120px',
                }
              : { flexGrow: 20 }),
          }}
        />
        <Image
          alt="AD Logo"
          src="AD_logo_2.svg"
          sx={{
            boxShadow: '0 6px 4px -2px rgba(0, 0, 0, 0.25)',
            flexBasis: 'auto',
            flexShrink: 0,
            ...(variant !== 'home'
              ? {
                  borderBottomLeftRadius: 130,
                  borderBottomRightRadius: 130,
                  flexGrow: 1,
                }
              : {
                  position: 'relative',
                  bottom: ['5em', '5em', '5em', '11em'],
                  left: ['5em', '5em', '5em', '10em'],
                  maxWidth: [120, 180, 180, 260],
                  zIndex: 0,
                  borderBottomLeftRadius: [86, 122],
                  borderBottomRightRadius: [86, 122],
                  flexGrow: 20,
                  transition: 'all 1s',
                }),
          }}
        />
      </Flex>
    </Box>
  );
}

export default Avatar;

import React from 'react';
import {
  Image as ThemeUIImage,
  ImageProps as ThemeUIImageProps,
  ThemeUIStyleObject,
} from 'theme-ui';
import { Flex } from './Flex';
import { Typography } from './Typography';

export interface ImageSpinnerProps extends ThemeUIImageProps {
  label: string;
  labelSx?: ThemeUIStyleObject;
  imageSx?: ThemeUIStyleObject;
  sx?: ThemeUIStyleObject;
}

export const ImageSpinner = React.forwardRef<HTMLImageElement, ImageSpinnerProps>(
  ({ label, sx, imageSx: iconSx, labelSx, ...props }, ref) => (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        ...sx,
      }}
    >
      <ThemeUIImage
        ref={ref}
        sx={{
          animationName: 'ckw',
          animationDuration: '6s',
          animationIterationCount: 'infinite',
          transformOrigin: '50% 50%',
          display: 'inline-block',
          '@keyframes ckw': {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          },

          ...iconSx,
        }}
        {...props}
      />
      <Typography sx={{ m: 3, ...labelSx }} variant="label">
        {label}
      </Typography>
    </Flex>
  )
);

ImageSpinner.displayName = ' ImageSpinner';

export default ImageSpinner;

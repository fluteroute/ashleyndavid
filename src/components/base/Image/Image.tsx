import React from 'react';
import { Image as ThemeUIImage, ImageProps as ThemeUIImageProps } from 'theme-ui';

export type ImageProps = ThemeUIImageProps;

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ variant = 'default', ...props }, ref) => (
    <ThemeUIImage ref={ref} variant={variant} {...props} />
  )
);

Image.displayName = 'Image';

export default Image;

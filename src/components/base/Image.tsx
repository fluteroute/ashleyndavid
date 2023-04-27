import React from "react";
import {
  Image as ThemeUIImage,
  ImageProps as ThemeUIImageProps,
} from "theme-ui";

export type ImageProps = ThemeUIImageProps;
/**
 * Primary UI component for user interaction
 */
export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => <ThemeUIImage ref={ref} {...props} />
);

Image.displayName = "Image";

export default Image;

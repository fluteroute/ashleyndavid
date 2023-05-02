import React from 'react';
import { Card as ThemeUICard, CardProps as ThemeUICardProps } from 'theme-ui';

export type CardProps = ThemeUICardProps;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'primary', ...props }, ref) => <ThemeUICard ref={ref} variant={variant} {...props} />
);

Card.displayName = 'Card';

export default Card;

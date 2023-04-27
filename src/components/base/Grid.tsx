import React from "react";
import { Grid as ThemeUIGrid, GridProps as ThemeUIGridProps } from "theme-ui";

export type GridProps = ThemeUIGridProps;
/**
 * Primary UI component for user interaction
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (props, ref) => <ThemeUIGrid ref={ref} {...props} />
);

Grid.displayName = "Grid";

export default Grid;

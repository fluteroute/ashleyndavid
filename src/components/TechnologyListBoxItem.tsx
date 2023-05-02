import React from 'react';
import { ListBoxItem, ListBoxItemProps, Typography } from '../components';

export const TechnologyListBoxItem = ({
  children,
  tech,
  ...other
}: ListBoxItemProps & { tech: string }) => (
  <ListBoxItem style={{ paddingTop: '4px', paddingBottom: '4px', fontSize: '16px' }} {...other}>
    <Typography variant="body1" sx={{ fontWeight: 800, fontSize: '18px' }}>
      {`${tech}:`}
    </Typography>{' '}
    {children}
  </ListBoxItem>
);

TechnologyListBoxItem.displayName = 'TechnologyListBoxItem';

export default TechnologyListBoxItem;

import React from 'react';
import { ListBoxItem, ListBoxItemProps, Typography } from '../base';

export type TechnologyListBoxItemProps = ListBoxItemProps & { tech: string };

export function TechnologyListBoxItem(props: TechnologyListBoxItemProps) {
  const { children, tech, ...other } = props;

  return (
    <ListBoxItem style={{ paddingTop: '4px', paddingBottom: '4px', fontSize: '16px' }} {...other}>
      <Typography variant="body1" sx={{ fontWeight: 800, fontSize: '18px' }}>
        {`${tech}:`}
      </Typography>{' '}
      {children}
    </ListBoxItem>
  );
}

TechnologyListBoxItem.displayName = 'TechnologyListBoxItem';

export default TechnologyListBoxItem;

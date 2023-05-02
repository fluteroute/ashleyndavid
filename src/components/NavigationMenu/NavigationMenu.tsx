import React from 'react';
import { Box, ListBox, Menu } from '../base';
import { NavigationMenuItem } from './';
import { routes } from '../../index';
import { useLocation } from 'react-router-dom';

function NavigationMenu() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    open && setOpen(!open);
  }, [location.pathname]);

  return (
    <Box
      sx={{
        paddingRight: 2,
        paddingLeft: 2,
        position: ['fixed', 'fixed', 'fixed', 'unset'],
        top: ['1em', '1em', '1em', 'unset'],
        right: ['1em', '1em', '1em', 'unset'],
      }}
    >
      <Menu align="start" side="right" open={open} onOpenChange={(openProp) => setOpen(openProp)}>
        <ListBox
          role="listbox"
          style={{ listStyleType: 'none', paddingInlineStart: 0 }}
          variant="none"
        >
          {routes.map(({ path, name }, index) => (
            <NavigationMenuItem
              key={`${name.toLowerCase()}-${index}`}
              label={name as string}
              to={path}
            />
          ))}
        </ListBox>
      </Menu>
    </Box>
  );
}

export default NavigationMenu;

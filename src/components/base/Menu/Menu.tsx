import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Box, IconButton, IconButtonProps } from '../';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface MenuProps extends Popover.PopoverProps, IconButtonProps {
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export const Menu = React.forwardRef<HTMLButtonElement, MenuProps>((props, ref) => {
  const { align, children, side, ...other } = props;

  return (
    <Popover.Root {...other}>
      <Popover.Trigger asChild>
        <IconButton aria-label="Navigation Menu" variant="secondary" ref={ref}>
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align={align} className="PopoverContent" side={side} sideOffset={2}>
          <Box
            sx={{
              backgroundColor: 'secondary',
              color: 'textPrimary',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '20px',
              paddingTop: '8px',
              paddingBottom: '8px',
              width: '100%',
            }}
          >
            {children}
          </Box>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
});

Menu.displayName = 'Menu';

export default Menu;

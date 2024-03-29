import React from 'react';
import { Button, Flex, ListBoxItem } from '../../base';
import {
  IconDefinition,
  faAddressCard,
  faClipboardList,
  faHouse,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export type NavigationMenuItemProps = {
  label: string;
  to?: string;
};

export const NavigationMenuItem = React.forwardRef<HTMLLIElement, NavigationMenuItemProps>(
  (props, ref) => {
    const { label, to, ...other } = props;

    const iconMap: Record<string, IconDefinition> = {
      Home: faHouse,
      About: faAddressCard,
      Career: faClipboardList,
      Contact: faEnvelope,
    };

    const location = useLocation();
    const checkIfActive = (pathname: string) =>
      label === 'Home' ? pathname === to : pathname === `/${to}`;
    const [isActive, setIsActive] = React.useState(checkIfActive(location.pathname));

    React.useEffect(() => {
      setIsActive(checkIfActive(location.pathname));
    }, [location.pathname]);

    return (
      <ListBoxItem ref={ref}>
        <Button
          as={Link}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          to={to}
          variant="secondary"
          sx={{
            borderRadius: 0,
            width: '100%',
            paddingRight: '24px',
            paddingLeft: '24px',
            fontFamily: 'Glory, Source Code Pro, Arial',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal',
            letterSpacing: '1px',
            textAlign: 'start',
            marginBottom: '4px',

            '&[data-active]': {
              fontWeight: '800',
              color: '#FFFFFF',
              textDecoration: 'underline',
            },
          }}
          data-active={isActive ? true : undefined}
          {...other}
        >
          <Flex
            sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
          >
            {label}
            <FontAwesomeIcon
              icon={iconMap[label]}
              style={{ marginLeft: '16px', marginRight: '8px' }}
            />
          </Flex>
        </Button>
      </ListBoxItem>
    );
  }
);

NavigationMenuItem.displayName = 'NavigationMenuItem';

export default NavigationMenuItem;

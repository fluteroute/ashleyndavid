import React from 'react';
import styled from '@emotion/styled';

export const ListBoxItem = styled.li({
  fontFamily: 'Arial, sans-serif',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: '1px',
});

export type ListBoxItemProps = React.ComponentProps<typeof ListBoxItem>;

export default ListBoxItem;

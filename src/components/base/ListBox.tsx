import React from 'react';
import styled from '@emotion/styled';

type ListBoxOptions = {
  variant?: 'bullet' | 'none';
};

export const ListBox = styled.ul(({ variant = 'bullet' }: ListBoxOptions) => ({
  ...(variant === 'none' && { listStyleType: 'none', paddingInlineStart: 0 }),
}));

export type ListBoxProps = React.ComponentProps<typeof ListBox>;

export default ListBox;

import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';

const NavBlock = styled(Block)`
  max-width: 960px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

const NavItem = styled(Block)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  &:not(:last-child) {
    border-bottom: 1px solid grey;
  }
`;

export default function Navigation() {
  return (
    <NavBlock>
      <NavItem>Popular</NavItem>
      <NavItem>Sport</NavItem>
      <NavItem>Art</NavItem>
    </NavBlock>
  );
}

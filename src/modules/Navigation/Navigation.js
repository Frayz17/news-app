import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getState } from 'services/Store';
import Block from 'components/Block';
import Typography from 'components/Typography';
import { ButtonLink } from 'components/Button';

const StyledBlockFlex = styled(Block)`
  max-width: 960px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

const NavigationLink = styled(ButtonLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  &:not(:last-child) {
    border-bottom: 1px solid grey;
  }
`;

export default connect()(
  React.memo(function Navigation() {
    const {
      reducerNavigation: { links }
    } = getState();

    const location = useLocation();

    return (
      <StyledBlockFlex>
        {links.map(({ path, title }, i) => {
          const isActiveFlag = location.pathname === path;
          return (
            <NavigationLink
              key={i}
              disabled={isActiveFlag}
              to={path}
              style={
                isActiveFlag
                  ? {
                      backgroundColor: 'lightblue',
                      color: 'blue'
                    }
                  : {}
              }>
              <Typography>{title}</Typography>
            </NavigationLink>
          );
        })}
      </StyledBlockFlex>
    );
  })
);

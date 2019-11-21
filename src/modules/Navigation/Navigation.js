import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom';

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

export default withRouter(
  connect()(
    React.memo(function Navigation({ location }) {
      const isActiveFlag = location.pathname === '/';
      console.log('dfgdfg');
      return (
        <StyledBlockFlex>
          <NavigationLink
            disabled={isActiveFlag}
            to={'/'}
            style={
              isActiveFlag
                ? {
                    backgroundColor: 'ligthgrey',
                    color: 'green'
                  }
                : {}
            }
          >
            <Typography>Home</Typography>
          </NavigationLink>

          <NavigationLink to={'/popular'}>
            <Typography>Popular</Typography>
          </NavigationLink>
          <NavigationLink to={'/Sport'}>
            <Typography>Sport</Typography>
          </NavigationLink>
          <NavigationLink to={'/Art'}>
            <Typography>Art</Typography>
          </NavigationLink>
        </StyledBlockFlex>
      );
    })
  )
);

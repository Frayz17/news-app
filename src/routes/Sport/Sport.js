import React, { useEffect, memo } from 'react';
import loadSport from 'routes/Sport/loadContent';
import { getState } from 'services/Store';

export default memo(function Sport() {
  const { sport = [] } = getState();

  // onMount
  useEffect(() => {
    loadSport();
  }, []);

  return <div>Sport</div>;
});

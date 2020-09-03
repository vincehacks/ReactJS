// Created by: Vince Chang

import React from 'react';

/* =========================================================================
 * Function Name: WithListLoading
 * Task: This function is going to render one of two things:
 * 1. A message that the API is still doing its work
 * 2. The actual component that is passed into it, which is the <List/>
 *
 * Depending if isLoading is false, this means that there is data ready to be
 * rendered. The data is pass as props into this component and then passed again
 * to <List/> as props.
  ========================================================================= */
function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default WithListLoading;
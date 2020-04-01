/* Created by Vince Chang */

import React from 'react';
import { shallow } from "enzyme";
import Details from '../Details';

/* =========================================================================
 * Function Name: snapshot test
 * Task: This test will test the Search component against a snapshot
 * The snapshot will compare to the previous snapshot (previous version)
   ========================================================================= */
test("Search renders correctly", () => {
  const component = shallow(<Details />);
  expect(component).toMatchSnapshot();
});


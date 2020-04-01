/* Created by Vince Chang
 * Will need to tell babel how to get jest to understand node & jsx, look at
 * babel.rc
 * Running: ./node_modules/.bin/jest will automatically look at __tests__ and
 * run all tests in this directory
 *
 * If change is made, will need to update the snapshot by running
 * ./node_modules/.bin/jest -u
 * Then test again with ./node_modules/.bin/jest
 *
 * package.json updated so can run these:
 * yarn test
 * yarn test:update
 *
 * Using enzyme so that the tests fail in appropriate places. If changing one
 * component that is called in another breaks your tests, you do not want the
 * test to report failure from the parent, you want it from where the change was
 *
 * If need to comment out a test, just put "x" in front of the test
 * i.e
 * xtest('Search renders correctly',() =>){ ...
 *
 * What goes in expect is what you are testing and what goes in toEqual is the
 * expected answer
 *
 * Can use istanbul to see the overall coverage by running
 * yarn test -- --coverage
 * Also can open up coverage/lcov-report/index.html to view web version
 * package.json updated to now run:
 * yarn test:coverage
 */

import React from "react";
import Search from "../Search";
import { shallow } from "enzyme";
import preload from "../../data.json";
import ShowCard from "../ShowCard";

/* =========================================================================
 * Function Name: snapshot test
 * Task: This test will test the Search component against a snapshot
 * The snapshot will compare to the previous snapshot (previous version)
   ========================================================================= */
test("Search renders correctly", () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component).toMatchSnapshot();
});

/* =========================================================================
 * Function Name: number of show cards
 * Task: This test will test make sure that the number of cards from the data
 * defined in preload are all rendered properly
 * Enzyme allows the .find() to work for both css & for finding react components
   ========================================================================= */
test("Search should render correct number of shows", () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

/* =========================================================================
 * Function Name: search should render correct amount of shows based on search
 * Task: This test will test if a user types in black, there should only be 2
 * showCards that render which is Black Mirror and Orange is the New Black
 *
 * This test will find the <input> in <Search/> and then simulate an onChange
 * with 'black' as the searchWord
 * So 2 = 2
   ========================================================================= */
// test('Search should render correct number of shows when searching black',() => {
//   const searchWord = 'black';
//   const component = shallow(<Search shows={preload.shows} />);
//   component.find('input').simulate('change', { target: { value: searchWord } });
//   const showCount = preload.shows.filter(
//     show =>
//       `${show.title} ${show.description}`
//         .toUpperCase()
//         .indexOf(searchWord.toUpperCase()) >= 0
//   ).length;
//   expect(component.find(ShowCard).length).toEqual(showCount);
// });

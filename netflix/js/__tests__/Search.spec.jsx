import React from 'react';
import {shallow, render} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import store from '../store';
import {setSearchTerm} from '../actionCreators';
import preload from '../../data.json';
import Search, {Unwrapped as UnwrappedSearch} from '../Search';
import ShowCard from '../ShowCard';


test('Search renders correctly', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm= ''/>);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm= ''/>);
  // expect(what I am testing).toEqual(the real answer)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search renders correctly', () => {
  const component = shallow(<UnwrappedSearch searchTerm="" shows={preload.shows} />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<UnwrappedSearch searchTerm="" shows={preload.shows} />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'New York';
  store.dispatch(setSearchTerm(searchWord));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search shows={preload.shows} />
      </MemoryRouter>
    </Provider>
  );

  const showCount = preload.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >=0
  ).length;

  expect(component.find('.show-card').length).toEqual(showCount);
});
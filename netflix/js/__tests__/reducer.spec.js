// @flow

import reducers from '../reducers';

// Testing entering a value in the search field
test('SET_SEARCH_TERM', () => {
  const state = reducers({searchTerm:'',apiData:{}}, {type:'SET_SEARCH_TERM',payload:'black'});
  expect(state).toEqual({searchTerm:'black',apiData:{}});
});

// Testing API retrevial
test('ADD_API_DATA', () => {
  const state = reducers({searchTerm:'',
  apiData:{}}, {type:'ADD_API_DATA',payload:{rating:'1.7',
  title:'Westworld',year:'2016–',description:'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',poster:'ww.jpg',imdbID:'tt0475784',trailer:'eX3u0IlBBO4'}});
  expect(state).toEqual({searchTerm:'',apiData:{tt0475784:{rating:'1.7',title:'Westworld',year:'2016–',description:'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',poster:'ww.jpg',imdbID:'tt0475784',trailer:'eX3u0IlBBO4'}}});
});
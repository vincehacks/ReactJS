// Created by Vince Chang

import React from 'react';

/* This is a React function that just sets up the Provider and Consumer, this
 * is not a featured component, just the set up!
 *
 * It has been created to get the location, animal and breed from search.
 * params page in order to get it to results for searching purposes
 *
 * New React Method that creates 2 components
 * 1. Provider: Makes everything underneath it available
 * 2. Consumer: reads from the provider, no matter how much things in between it
 * Have to describe what I want available
 *
 * The whole idea is to have my context object have all of what I list below to
 * be available every time I access my context object! Context will be reading
 * from the App.js state
 *
 * This is React 16's way of doing Redux
 */

const SearchContext = React.createContext({
  location: 'San Francisco, CA',
  animal: '',
  breed: '',
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

// The Provider and Consumer are coming from createContext
export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;

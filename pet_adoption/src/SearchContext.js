import React from "react";

// This class is created to get the location, animal and breed from search
// params page in order to get it to results for searching purposes

// New React Method that creates 2 components
// 1. Provider: Makes everything underneath it available
// 2. Consumer: reads from the provider, no matter how much things in between it
// Have to describe what I want available
const SearchContext = React.createContext({
  location: "San Francisco, CA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;

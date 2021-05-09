import React, { createContext, useContext, useReducer } from "react";

// Prepare dataLayer
export const StateContext = createContext();

// Wrap our app and provide the data layer used in our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from dataLayer
export const useStateValue = () => useContext(StateContext);

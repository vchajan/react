// src/GlobalStateContext.js
import React, { createContext, useReducer } from "react";

// Vytvoríme kontext
export const GlobalStateContext = createContext();

// Akcie pre reducer
const SET_MESSAGE = "SET_MESSAGE";

// Východiskový stav
const defaultState = {
   message: "",
};

// Reducer funkcia pre aktualizácie stavu
const globalStateReducer = (state, action) => {
   switch (action.type) {
      case SET_MESSAGE:
         return { ...state, message: action.payload };
      default:
         return state;
   }
};

// Provider komponent, ktorý bude obaľovať našu aplikáciu a poskytovať stav
export const GlobalStateProvider = ({ children }) => {
   const [state, dispatch] = useReducer(globalStateReducer, defaultState);

   return (
      <GlobalStateContext.Provider value={{ state, dispatch }}>
         {children}
      </GlobalStateContext.Provider>
   );
};

// Akcia pre zmenenie správy
export const setMessage = (dispatch, message) => {
   dispatch({ type: SET_MESSAGE, payload: message });
};

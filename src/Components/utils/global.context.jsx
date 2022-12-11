import { breadcrumbsClasses } from "@mui/material";
import { border } from "@mui/system";
import { createContext, useReducer, useState } from "react";

export const initialState = { theme: "", data: [] }

export const ContextGlobal = createContext();

const reducerFunction = (state, { type }) => {
  switch (type) {
    case "Dark":
      return {
         bgColor: "#000015" , bgFlag:"Dark"
      };
    case "Light":
      return {
        bgColor: "#eee" , bgFlag:"Light"
      };

    default:
      return state;
  }

}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const initialState = {
     bgColor: "#eee" , bgFlag:"Light"
  }
  const [state, dispatch] = useReducer(reducerFunction, initialState)
  const store = {
    state,
    dispatch
  }
  return (
    <ContextGlobal.Provider value={store}>
      <div style={{ backgroundColor:`${state.bgColor}`, width: "100%", heigh: "100%", minHeight: "100%", color: "white" }}>

        {children}
      </div>

    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
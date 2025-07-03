import React, { useReducer } from "react";

// Generic component to create context
export default (reducer, actions, defaultValue) => {
  // Create context
  const Context = React.createContext();

  // Provider function
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    // iterate over action functions
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

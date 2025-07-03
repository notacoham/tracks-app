import React from "react";
import createDataContext from "./createDataContext";

// reducer function to cover action types
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// bound action functions
const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api req to sign up with email and password
    // if sign up, modify state to show authenticated
    // if sign up fails show error message
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to sign in
    // handle success and update state
    // handle failure with error message
  };
};

const signout = (dispatch) => {
  return () => {
    // sign out update state
  };
};

// export providing reducer function, bound actions, and initial state object
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);

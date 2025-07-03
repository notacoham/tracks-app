import React from "react";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

// reducer function to cover action types
const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { token: action.payload, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

// bound action functions
const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api req to sign up with email and password
    try {
      // if sign up, modify state to show authenticated
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
    } catch (error) {
      // if sign up fails show error message
      dispatch({ type: "add_error", payload: "Something went wrong..." });
    }
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
  { errorMessage: "", token: null }
);

import React from "react";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

// reducer function to cover action types
const authReducer = (state, action) => {
  switch (action.type) {
    case "signout":
      return { token: null, errorMessage: "" };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signin":
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
      dispatch({ type: "signin", payload: response.data.token });
    } catch (error) {
      // if sign up fails show error message
      dispatch({
        type: "add_error",
        payload: "Something went wrong with Sign up...",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    // try to sign in
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
    } catch (error) {
      dispatch({
        // handle failure with error message
        type: "add_error",
        payload: "Something went wrong with Sign in...",
      });
    }
    // handle success and update state
  };
};

const signout = (dispatch) => {
  return async () => {
    // sign out update state and clear storage
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error_message" });
  };
};

// auto sign in function using Async storage
const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signin", payload: token });
    }
  };
};

// export providing reducer function, bound actions, and initial state object
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { errorMessage: "", token: null }
);

import axios from "axios";
import React from "react";
import { SET_TOKEN } from "../constants";

// require("dotenv").config();

export const loginAction = (loginData) => {
  return async function (dispatch) {
    try {
      let loginUrl = process.env.REACT_APP_loginUrl;
      console.log("loginData ", loginData);
      const res = await axios.post(process.env.REACT_APP_loginUrl, loginData);
      const data = res;
      console.log("data", data);

      dispatch(setToken(data.data));
    } catch (err) {
      throw err;
    }
  };
};

export const setToken = (Token = null) => {
  if (Token) {
    console.log(Token);
    return {
      type: SET_TOKEN,
      data: Token,
    };
  }

  return {
    type: SET_TOKEN,
    data: "",
  };
};

export const signupAction = (signupData) => {
  return async function (dispatch) {
    try {
      let signupUrl = process.env.REACT_APP_signupUrl;
      console.log("signupData ", signupData);
      const res = await axios.post(signupUrl, signupData);
      const data = res;
      console.log("data", data);

      dispatch(setToken(data.data));
    } catch (err) {
      throw err;
    }
  };
};

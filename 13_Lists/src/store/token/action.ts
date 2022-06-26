import { useEffect } from "react";
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { MyAction, RootState } from "../reducer";

export const SET_TOKEN = 'SET_TOKEN';
export type setTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
}
export const setToken: ActionCreator<setTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
})

export const saveToken = () : ThunkAction<void, RootState, unknown, MyAction> => (dispatch, getState) => {
  useEffect(() => {
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    }
  }, [])
}

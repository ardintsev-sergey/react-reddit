import { Reducer } from "redux";
import { RootState } from "../reducer";
import { setTokenAction, SET_TOKEN } from "./action";

export type tokenState = {
  token: string;
}

export const initialTokenState: tokenState = {
  token: '',
}

export const tokenReducer: Reducer<tokenState, setTokenAction> = (state = initialTokenState, action) => {
// export const tokenReducer: Reducer<string, setTokenAction> = (state = '', action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        token: action.token,
      }
      default:
        return state;
  }
}

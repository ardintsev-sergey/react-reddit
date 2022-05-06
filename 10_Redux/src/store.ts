import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
  commentText: string;
}
const initialState: RootState = {
  commentText: 'Привет, Мир!',
}
const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (text) => {
  type: UPDATE_COMMENT,
  text,
}
export const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
      default:
        return state;
  }
}

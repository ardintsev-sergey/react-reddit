import { meReducer, MeState } from './me/reducer';
import { ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR, MeRequestErrorAction, MeRequestSuccessAction, MeRequestAction } from './me/actions';
import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
}
export const initialState: RootState = {
  commentText: 'Привет, Мир!',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type updateCommentAction = {
  type: typeof UPDATE_COMMENT,
  text: string,
}
export const updateComment: ActionCreator<updateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

type MyAction = updateCommentAction
  | setTokenAction
  | MeRequestAction
  | MeRequestErrorAction
  | MeRequestSuccessAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      }
      default:
        return state;
  }
}

const SET_TOKEN = 'SET_TOKEN';
type setTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
}
export const setToken: ActionCreator<setTokenAction> = (token) => ({
  type: SET_TOKEN,
  token,
})

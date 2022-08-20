import { setTokenAction, SET_TOKEN } from './token/action';
import { MeActions, meReducer, MeState } from './me/reducer';
import { ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR, MeRequestErrorAction, MeRequestSuccessAction, MeRequestAction } from './me/actions';
import { ActionCreator, AnyAction, Reducer } from "redux";
import { store } from '../App';
import { tokenReducer } from './token/reducer';

export type RootState = {
  commentText: string;
  // token: tokenState;
  token: string;
  me: MeState;
}
export const initialState: RootState = {
  commentText: 'Привет, Мир!',
  // token: initialTokenState,
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

export type MyAction = updateCommentAction
  | setTokenAction
  | MeActions;
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
        token: tokenReducer(state.token, action)
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

export type AppDispatch = typeof store.dispatch

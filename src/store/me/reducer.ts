import { IUserData } from './../../hooks/useUserData';
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from './actions';
import { Reducer } from 'redux';

export type MeState = {
  loading: boolean;
  error: string;
  data: IUserData;
}

const initialState: MeState = {
  loading: false,
  error: '',
  data: {},
}

export type MeActions = MeRequestAction
| MeRequestErrorAction
| MeRequestSuccessAction;
export const meReducer: Reducer<MeState, MeActions> = (state = initialState, action) => {
  switch(action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    default:
      return state;
  }
}

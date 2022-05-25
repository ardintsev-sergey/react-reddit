import { meRequestAsync } from './../store/me/actions';
import { useEffect } from 'react';
import { RootState } from '../store/reducer';
import { useSelector, useDispatch } from 'react-redux';

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data);
    const loading = useSelector<RootState, boolean>(state => state.me.loading);
    const token = useSelector((state: RootState) => state.token);
    const dispatch = useDispatch();
    console.log(token);

    useEffect(() => {
      if (!token) return;
      dispatch(meRequestAsync())
    }, [token])

    return {
      data,
      loading
    }
}

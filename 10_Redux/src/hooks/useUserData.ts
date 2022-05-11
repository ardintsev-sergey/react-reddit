import { tokenContext } from './../context/tokenContext';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useStore } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../store';
import { composeWithDevTools } from '@redux-devtools/extension';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});
    const token = useContext(tokenContext);
    // const store = createStore(rootReducer, composeWithDevTools());
    // const token = store.getState().token;

    useEffect(() => {
      axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: {Authorization: `bearer ${token}`}
      })
        .then((resp ) => {
          const userData = resp.data;
          setData({ name: userData.name, iconImg: userData.icon_img })
        })
        .catch(console.log);
    }, [token])

    return [data]
}

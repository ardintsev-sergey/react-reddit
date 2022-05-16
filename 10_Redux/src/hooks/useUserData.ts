import { useEffect, useState } from 'react';
import axios from 'axios';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});
    const token = useSelector((x: RootState) => x.token);
    console.log(token);

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

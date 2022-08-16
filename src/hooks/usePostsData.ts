import { RootState } from '../store/reducer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import axios from "axios";

export function usePostsData() {
  const token = useSelector<RootState>(store => store.token)
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(0)
  const [data, setData] = useState<any[]>([])
  const [afterLoad, setAfterLoad] = useState('')
  const [errorLoading, setErrorLoading] = useState('');
  // console.log(token);
  const fetchData = () => {
    if(!token) return
    setLoading(true)
    axios.get('https://oauth.reddit.com/best', {
      headers: { Authorization: `bearer ${token}` },
      params: { limit: '10', after: afterLoad }
    })
      .then(({ data: { data: { after, children } } }) => {
        setData(prevData => prevData.concat(...children.map((el: {data: []}) => el.data)))
        setAfterLoad(after)
      })
      .catch((error) => { setErrorLoading(String(error))})
      .finally(() => { setLoading(false);
      // setLoaded(loaded + 1);
      // console.log(loaded);
     })


  }

  const loadHandler = () => {
    setLoaded(0)
    fetchData()
  }
  console.log(data)
  return { data, loading, loaded, afterLoad, loadHandler, fetchData, setLoaded, errorLoading }
}


import { useEffect, useState } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
};

export default useGet;

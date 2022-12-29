import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosToGetData = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useAxiosToGetData;

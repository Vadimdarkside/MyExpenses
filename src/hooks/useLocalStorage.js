import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [timerFinished, setTimerFinished] = useState(false); //-this state only for 2second wait logic for data fetching

  useEffect(() => {
    setTimeout(() => {
      const storedData = localStorage.getItem(key);
      storedData ? setData(JSON.parse(storedData)) : setData(initialValue);
      setIsDataLoading(false);
      setTimerFinished(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (timerFinished) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }, [key, data]);

  return [data, setData, isDataLoading];
}

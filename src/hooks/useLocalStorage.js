import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [timerFinished, setTimerFinished] = useState(false); //!!!-this state only for 2second wait logic for data fetching, in prod - delete timer
  //1
  useEffect(() => {
    setTimeout(() => {
      const storedData = localStorage.getItem(key);
      storedData ? setData(JSON.parse(storedData)) : setData(initialValue);
      setIsDataLoading(false);
      setTimerFinished(true);
    }, 2000);
  }, []);
  //2
  useEffect(() => {
    if (timerFinished) {
      //Це треба, бо через таймер в "1", код в цьому ефекті виконається першим, шо не треба
      localStorage.setItem(key, JSON.stringify(data));
    }
  }, [key, data]);

  return [data, setData, isDataLoading];
}

import { data_url } from "../utils/constants";
import { useState, useEffect } from "react";
const useFetch = () => {
  const [user_list, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(data_url);
      const json = await data.json();
      setUserList(json);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return [user_list, isLoading];
};
export default useFetch;

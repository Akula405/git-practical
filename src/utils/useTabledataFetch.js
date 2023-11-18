import { useState, useEffect } from "react";
const useTabledataFetch = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const data = await fetch(url);
      const json = await data.json();
      setList(json);
      setLoading(false);
    } catch (error) {
      setIsError({ status: true, msg: error.message });
      console.log(error);
      setLoading(false);
    }
  }
  return [list, loading, isError];
};
export default useTabledataFetch;

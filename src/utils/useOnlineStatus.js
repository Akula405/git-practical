import { useState, useEffect } from "react";
const useOnlineStatus = () => {
  const [state, setState] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setState(false);
    });
  }, []);
  return state;
};

export default useOnlineStatus;

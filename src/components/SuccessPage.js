import React from "react";
import { useNavigate } from "react-router-dom";
const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>From submitted Successfully</h3>
      <button onClick={() => navigate("/")}>back</button>
    </div>
  );
};

export default SuccessPage;

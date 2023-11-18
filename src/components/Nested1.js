import React from "react";
import { useLocation, Link } from "react-router-dom";

const Nested1 = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="nested1">
      <h2>This is Nested1 Component</h2>
      <h4>{state.data}</h4>
      <button>
        <Link to="/contact">Back to Contact</Link>
      </button>
    </div>
  );
};

export default Nested1;

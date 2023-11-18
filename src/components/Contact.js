import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h4>This is Contact Page </h4>
      <button
        onClick={() => {
          navigate("nested1", {
            state: { data: "Hello this data from useNavige" },
          });
        }}
      >
        Go to Neseted 1
      </button>
      <button>Go to Neseted 2</button>
      <Outlet />
    </div>
  );
};

export default Contact;

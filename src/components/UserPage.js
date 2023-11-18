import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
//import { useNavigate } from "react-router-dom";
//import { data_url } from "../utils/constants";
const UserPage = () => {
  const [user_list] = useFetch();
  const { userId } = useParams();
  const userDetails = user_list.find((item) => item.id === parseInt(userId));
  console.log("details", userDetails);

  return (
    <div>
      <div>
        {userDetails ? (
          <div>
            <h2>User Details</h2>
            <p>ID: {userDetails.id}</p>
            <p>Name: {userDetails.name}</p>
            {/* Add more details as needed */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button>
        <Link to="/">Back</Link>
        {/* Instead of Link  we can use UseNavigate*/}
      </button>
    </div>
  );
};

export default UserPage;

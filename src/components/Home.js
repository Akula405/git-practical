import React from "react";
import useFetch from "../utils/useFetch";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [user_list, isLoading] = useFetch();
  //console.log("hello", user_list, isLoading);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  return (
    <>
      <h3>Welcome to Home Page</h3>
      <div className="user-container">
        {user_list.map((item) => {
          return (
            <div>
              <Link to={`/user/${item.id}`} key={item.id}>
                <UserCard data={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;

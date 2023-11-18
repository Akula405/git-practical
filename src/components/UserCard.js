import React from "react";

const UserCard = ({ data }) => {
  const { name, email, phone, address } = data;
  const { street, city } = address;
  //console.log(data);
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <h3>{email}</h3>
      <h4>{street + ", " + city}</h4>
      <h5>{phone}</h5>
    </div>
  );
};

export default UserCard;

import "./styles.css";
//import React, { useState, useEffect } from "react";
import useTabledataFetch from "../utils/useTabledataFetch";

export default function App() {
  const [list, loading, isError] = useTabledataFetch();
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (isError.status) {
    return <h2 style={{ color: "red" }}>{isError.msg}</h2>;
  }
  // console.log(list);
  return (
    <div className="App">
      {
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {list.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e?.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}

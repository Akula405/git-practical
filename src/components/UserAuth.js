import React from "react";
import "../utils/auth.css";
import { useState } from "react";
//import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useId } from "react";
import Debouncing from "./Debouncing";
const UserAuth = () => {
  let id1 = useId();
  let id2 = useId();
  let id3 = useId();
  let id4 = useId();
  console.log("asdf", id1);
  console.log("asdf", id2);
  console.log("asdf", id3);
  console.log("asdf", id4);
  const [user, setUser] = useState({ email: "", password: "" });
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { email, password } = user;
  const handleSignin = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        //navigate("/login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        //navigate("/login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div>
      <center>
        <h2>User Authantication</h2>
        <form autoComplete="off">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={inputHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={inputHandler}
          />
          <br />
          <button onClick={handleSignin}>Sign In</button>

          <button onClick={handleSignup}>Sign Up</button>
        </form>
        <Debouncing />
      </center>
    </div>
  );
};

export default UserAuth;

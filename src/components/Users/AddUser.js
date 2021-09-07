import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!enteredUsername.includes("@")) {
      setFormIsValid(false);
      return;
    }
    if (enteredPassword.length <= 6) {
      setFormIsValid(false);
      return;
    }
    setEnteredUsername("");
    setEnteredPassword("");
    setFormIsValid(true);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Email</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          {!formIsValid && (
            <p style={{ color: "red" }}>Please enter a valid email.</p>
          )}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="number"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            autoComplete="off"
          />
          {!formIsValid && (
            <p style={{ color: "red" }}>
              Please enter a password greater than 6.
            </p>
          )}
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, seterror] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    if(username.trim().length === 0 || age.trim().length === 0){
        seterror(true);
        return;
    }
    if(+age<1){
        seterror(true);
        return;
    }
    const user = {id: Math.random().toString(), name:username, age: age};
    props.addUser(user);
    setUsername("");
    setAge("");
  };

  const enterName = (event) => {
    setUsername(event.target.value);
  };

  const enterAge = (event) => {
    setAge(event.target.value);
  };

  const updateError=(e)=>{
      seterror(e)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title="An error occured"
          message="Something went wrong!"
          updateError={updateError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={enterName}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={enterAge}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const username = useRef();
  const age = useRef();
  const [error, seterror] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    if(username.current.value.trim().length === 0 || age.current.value.trim().length === 0){
        seterror(true);
        return;
    }
    if(+age.current.value<1){
        seterror(true);
        return;
    }
    const user = {id: Math.random().toString(), name:username.current.value, age: age.current.value};
    props.addUser(user);
    username.current.value = '';
    age.current.value = "";
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
            ref={username}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={age}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

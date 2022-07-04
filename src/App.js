import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  
  const addUser=(user)=>{
    setUsers((preUsers)=>{
      return [user, ...preUsers];
    });
  }

  return <>
    <AddUser addUser={addUser}/>
    <UsersList users={users}/>
  </>;
}

export default App;

import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  
  const addUser=(user)=>{
    setUsers((preUsers)=>{
      return [user, ...preUsers];
    });
    console.log(users);
  }

  return <div>
    <AddUser addUser={addUser}/>
    <UsersList users={users}/>
  </div>;
}

export default App;

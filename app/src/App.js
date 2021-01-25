import logo from "./logo.svg";
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import User from "./components/User";

import "./App.css";

function App() {
  const [users, setUser] = useState([
    {
      name: "",
      email: "",
      password: "",
      terms: "",
    },
  ]);
  return (
    <div className="App">
      <h1> User Onboarding </h1>
      <UserForm />
      {users.map((user) => (
        <User details={user} />
      ))}
    </div>
  );
}

export default App;

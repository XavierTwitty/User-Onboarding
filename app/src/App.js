import logo from "./logo.svg";
import React from "react";
import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> User Onboarding </h1>
      <UserForm userForm={UserForm} />
    </div>
  );
}

export default App;

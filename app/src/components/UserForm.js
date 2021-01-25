import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email().required("email is required "),
  password: yup.string().required("password is required"),
  terms: yup.boolean().oneOf([true], "please agree to terms"),
});

export default function UserForm() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  console.log(errorState);

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({ ...errorState, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    console.log("input changed!", e.target.value);

    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserForm({ ...userForm, [e.target.name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    axios
      .post("https://reqres.in/api/users", userForm)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  console.log(errorState.email);
  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          onChange={inputChange}
          value={userForm.name}
        />
      </label>

      <label htmlFor="email">
        <input
          type="text"
          name="email"
          id="email"
          onChange={inputChange}
          value={userForm.email}
        />
        {errorState.email ? <p>{errorState.email}</p> : null}
      </label>

      <label htmlFor="password">
        <input
          type="text"
          name="password"
          id="password"
          onChange={inputChange}
          value={userForm.password}
        />
        {errorState.password ? <p>{errorState.password}</p> : null}
      </label>

      <label htmlFor="term">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          onChange={inputChange}
          value={userForm.terms}
        />
      </label>

      <button> Submit </button>
    </form>
  );
}

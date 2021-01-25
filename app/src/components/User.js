import React from "react";

export default function User(props) {
  const { details } = props;

  return (
    <div>
      <h2>{details.name}</h2>
      <p>{details.email}</p>
      <p>{details.password}</p>
      <p>{details.terms}</p>
    </div>
  );
}

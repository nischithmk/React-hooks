import React, { Component, useState } from "react";

function EmployeeForm() {
  var regex = /\d/g;
  var regex2 = /\W|_/g;
  var regex3 = /[a-z].*[A-Z]|[A-Z].*[a-z]/;

  const [person, setPerson] = useState({ name: "", email: "", password: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  var isnumeric = regex.test(person.password);
  var isSpecial = regex2.test(person.password);
  var isuppernlower = regex3.test(person.password);
  var ismore = person.password.length > 3;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { ...person, id: new Date().getTime().toString() };
    if (person.name && person.email && person.password) {
      if (isnumeric && isSpecial && ismore && isuppernlower) {
        setPeople([...people, newPerson]);
        setPerson({ name: "", email: "", password: "" });
      }
    }
  };

  return (
    <div className="form-container">
      <form className="form">
        <div className="input-box">
          <label htmlFor="name">Name : </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={person.name}
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="input-box">
          <label htmlFor="email">E-mail : </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            onChange={handleChange}
            value={person.email}
          />
          <br />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password : </label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={person.password}
          />
          <br />
          <div className="password_check">
            <div className="wrapper">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 98.5 98.5"
                enableBackground="new 0 0 98.5 98.5"
                space="preserve"
              >
                <path
                  className="checkmark"
                  style={{
                    display: ismore ? "block" : "none",
                    stroke: "green",
                  }}
                  fill="none"
                  strokeWidth="8"
                  strokeMiterlimit="10"
                  d="M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"
                />
              </svg>
            </div>
            <p
              style={{
                color: ismore ? "green" : "red",
              }}
            >
              More than 3 characters
            </p>
            <div className="wrapper">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 98.5 98.5"
                enableBackground="new 0 0 98.5 98.5"
                space="preserve"
              >
                <path
                  className="checkmark"
                  style={{
                    display: isnumeric ? "block" : "none",
                    stroke: "green",
                  }}
                  fill="none"
                  strokeWidth="8"
                  strokeMiterlimit="10"
                  d="M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"
                />
              </svg>
            </div>
            <p style={{ color: isnumeric ? "green" : "red" }}>
              Numerica values
            </p>
            <div className="wrapper">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 98.5 98.5"
                enableBackground="new 0 0 98.5 98.5"
                space="preserve"
              >
                <path
                  className="checkmark"
                  style={{
                    display: isSpecial ? "block" : "none",
                    stroke: "green",
                  }}
                  fill="none"
                  strokeWidth="8"
                  strokeMiterlimit="10"
                  d="M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"
                />
              </svg>
            </div>
            <p style={{ color: isSpecial ? "green" : "red" }}>
              Special characters
            </p>
            <div className="wrapper">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 98.5 98.5"
                enableBackground="new 0 0 98.5 98.5"
                space="preserve"
              >
                <path
                  className="checkmark"
                  style={{
                    display: isuppernlower ? "block" : "none",
                    stroke: "green",
                  }}
                  fill="none"
                  strokeWidth="8"
                  strokeMiterlimit="10"
                  d="M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"
                />
              </svg>
            </div>
            <p style={{ color: isuppernlower ? "green" : "red" }}>
              Both upper & lower case
            </p>
          </div>
          <button className="form-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>

      {/* <div className="users-card">
        <h1 style={{ color: person.name.length > 3 ? "green" : "red" }}>
          {person.name}
        </h1>
        {people.map((p) => {
          console.log(p.name);
          return <h1>{p.name}</h1>;
        })}
      </div> */}
    </div>
  );
}

export default EmployeeForm;

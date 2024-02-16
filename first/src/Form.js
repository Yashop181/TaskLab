import React, { useState } from "react";
import axios from "axios";

const Form = () => {
    const [input, setInput]= useState({});

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/datasave", input)
      .then(() => alert("Data Saved!!!"))
      .catch(error => console.error("Error saving data:", error));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bg-light p-4 rounded">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={handleInput}
                />
              </div>
              <div className="col-md-6">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={input.password}
                  onChange={handleInput}
                />
              </div>

              <div className="col-md-6">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={input.city}
                  onChange={handleInput}
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

import { useState } from "react";
import "./index.css";

export const RegistrationForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const SetDetails = (e) => {
    const { name, value } = e.target;
    e.preventdefault;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <section
        className="summary"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <p>
          hello, my name is 
          <span>
            {user.firstName} {user.lastName}
          </span>
          . My email address is <span>{user.email}</span> and my phone number is 
          <span>{user.phone}</span>
        </p>
      </section>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>sign Up</h1>
          <p>Please fill these details to create an account</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            required
            value={user.firstName}
            onChange={SetDetails}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            required
            value={user.lastName}
            onChange={SetDetails}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            required
            value={user.email}
            onChange={SetDetails}
          />

          <label htmlFor="phone">
            <b>Phone</b>
          </label>
          <input
            type="number"
            name="phone"
            placeholder="Enter phone Number"
            required
            value={user.phone}
            onChange={SetDetails}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={user.password}
            onChange={SetDetails}
          />

          <p>
            by creating your account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms and Privacy
            </a>
          </p>
          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

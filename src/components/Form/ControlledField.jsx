import { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 5) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
    }
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    // if (password.length < 5) {
    //   setError("Password must be 6 characters or longer");
    // } else {
    //   setError("");
    // }
  };
  return (
    <>
      <h2>React Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="border"
          placeholder="e-mail"
          name="email"
        />
        <br />
        <br />
        <input
          type="password"
          className="border"
          name="password"
          placeholder="password"
          defaultValue={password}
          required
          onChange={handlePasswordChange}
        />
        {/* <p className="text-error">
          <small>{error}</small>
        </p> */}
        <br />
        <br />
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
      <p className="text-error">
        <small>{error}</small>
      </p>
    </>
  );
};

export default ControlledField;

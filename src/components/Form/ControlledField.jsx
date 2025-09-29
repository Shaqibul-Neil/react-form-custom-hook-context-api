import { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
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
        <br />
        <br />
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </>
  );
};

export default ControlledField;

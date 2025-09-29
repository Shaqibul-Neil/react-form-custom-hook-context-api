import { useRef } from "react";

const UncontrolledField = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef, passwordRef);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log({ email, password });
  };
  return (
    <>
      <h2>React Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          ref={emailRef}
          className="border"
          placeholder="e-mail"
          name="email"
        />
        <br />
        <br />
        <input
          type="password"
          ref={passwordRef}
          className="border"
          name="password"
          placeholder="password"
        />
        <br />
        <br />
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
      <p className="text-error">
        <small></small>
      </p>
    </>
  );
};

export default UncontrolledField;

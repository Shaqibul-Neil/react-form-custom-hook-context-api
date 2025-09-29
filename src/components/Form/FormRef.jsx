import { useRef } from "react";

const FormRef = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleRefSubmit = (e) => {
    e.preventDefault();
    console.log({ nameRef, emailRef, passwordRef });
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log({ name, email, password });
  };
  return (
    <>
      <h2>React Form Ref</h2>
      <form onSubmit={handleRefSubmit}>
        <input
          type="text"
          className="border"
          placeholder="name"
          name="name"
          ref={nameRef}
        />
        <br />
        <br />
        <input
          type="email"
          className="border"
          placeholder="e-mail"
          name="email"
          ref={emailRef}
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
        {/* <p className="text-error">
          <small>{error}</small>
        </p> */}
        <br />
        <br />
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </>
  );
};

export default FormRef;

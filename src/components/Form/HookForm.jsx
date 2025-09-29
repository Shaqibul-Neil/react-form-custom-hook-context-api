import useInputField from "../../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };
  return (
    <>
      <h2>React Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border"
          placeholder="name"
          name="name"
          defaultValue={name}
          onChange={nameOnChange}
        />
        <br />
        <br />
        <input
          type="email"
          className="border"
          placeholder="e-mail"
          name="email"
          defaultValue={email}
          onChange={emailOnChange}
        />
        <br />
        <br />
        <input
          type="password"
          className="border"
          name="password"
          placeholder="password"
          defaultValue={password}
          onChange={passwordOnChange}
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

export default HookForm;

import useCustomInputHook from "../../hooks/useCustomInputHook";

const CustomHookForm = () => {
  const [nameInput, setNameInput] = useCustomInputHook("");
  const [emailInput, setEmailInput] = useCustomInputHook("");
  const [passwordInput, setPasswordInput] = useCustomInputHook("");

  const handleCustomHookFormSubmit = (e) => {
    e.preventDefault();
    console.log({ nameInput, emailInput, passwordInput });
  };

  return (
    <>
      <h2>React Custom Hook Form</h2>
      <form onSubmit={handleCustomHookFormSubmit}>
        <input
          type="text"
          className="border"
          placeholder="name"
          name="name"
          defaultValue={nameInput}
          onChange={setNameInput}
        />
        <br />
        <br />
        <input
          type="email"
          className="border"
          placeholder="e-mail"
          name="email"
          defaultValue={emailInput}
          onChange={setEmailInput}
        />
        <br />
        <br />
        <input
          type="password"
          className="border"
          name="password"
          placeholder="password"
          defaultValue={passwordInput}
          onChange={setPasswordInput}
        />

        <br />
        <br />
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </>
  );
};

export default CustomHookForm;

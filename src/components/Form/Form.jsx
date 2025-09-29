const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <>
      <h2>React Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="border" name="name" placeholder="name" />{" "}
        <br />
        <br />
        <input
          type="email"
          className="border"
          placeholder="e-mail"
          name="email"
        />
        <br />
        <br />
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </>
  );
};

export default Form;

/*
1. e.target.[name of the input field].value
2. use form action and formdata in the action handler.  <form action={handleFormAction}> const handleFormAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  }; formData.get(name of the input field)
3. controlled component. one per each field. use state on change of the field. dynamically handle error
4. handle all controlled field on one state i=object
  const [formData, setFomData] = useState({
          name: '', password: ''})
5. uncontrolled using useRef use when we don't want the value dynamically and we want only after submit
6. create custom hooks
*/

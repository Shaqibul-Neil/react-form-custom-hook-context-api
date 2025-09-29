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
*/

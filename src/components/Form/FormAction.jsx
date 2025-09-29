const FormAction = () => {
  const handleFormAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };
  return (
    <>
      <h2>React Form</h2>
      <form action={handleFormAction}>
        <input type="text" className="border" name="name" placeholder="name" />
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

export default FormAction;

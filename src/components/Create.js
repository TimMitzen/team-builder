import React, { useState } from "react";

const Create = props => {
  const startForm = { name: "", email: "", role: "" };
  const [name, setName] = useState(startForm);

  const handleChange = event => {
    setName({ ...name, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    resetForm(); //resets the form
    console.log(name.email);
    console.log(name.name);
    console.log(name.role);
  };

  const resetForm = event => {
    setName(startForm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name.name}
        placeholder="Name"
        onChange={event => handleChange(event)}
      />
      <input
        type="text"
        name="email"
        value={name.email}
        placeholder="Email"
        onChange={event => handleChange(event)}
      />
      <input
        type="text"
        name="role"
        value={name.role}
        placeholder="Role"
        onChange={event => handleChange(event)}
      />
      <textarea name="email" onChange={handleChange} value={name.email}/>
      <button>Submit!</button>
      <button>Reset</button>
      <button>Edit</button>
    </form>
  );
};

export default Create;

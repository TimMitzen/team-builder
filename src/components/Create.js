import React, { useState } from "react";

const Create = props => {
  const startForm = { name: "", email: "", role: "" };
  const [name, setName] = useState(startForm);

  const handleChange = event => {
    setName({ ...name, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!name.name || !name.email || !name.role){
       alert("please enter info")
    }else{
       props.setTeam([name,...props.team]);
       setName(startForm);
    }
   
    console.log(name.email);
    console.log(name.name);
    console.log(name.role);
    
  };

  const resetForm = event => {
   event.preventDefault();
    setName(startForm);
  };
  return (
     <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={name.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        value={name.role}
        placeholder="Role"
        onChange={handleChange}
      />
   
      <button>Submit!</button>
      <button onClick={resetForm}>Reset</button>
    <button>Edit</button>
      
    </form>
    
    </>
  );
};

export default Create;

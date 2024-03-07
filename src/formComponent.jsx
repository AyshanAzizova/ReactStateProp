import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    info: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        placeholder="Surname"
      />
      <input
        type="text"
        name="info"
        value={formData.info}
        onChange={handleChange}
        placeholder="Info"
      />
      <input
        type="text"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="text"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        placeholder="Gender"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

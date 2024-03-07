import React, { useState } from 'react';
import Form from './formComponent';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [info, setInfo] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  return (
    <div className="App">
      <Form
        onSubmit={(formData) => {
          setName(formData.name);
          setSurname(formData.surname);
          setInfo(formData.info);
          setAge(formData.age);
          setGender(formData.gender);
        }}
      />
      <div>
        <h2>Name: {name}</h2>
        <h2>Surname: {surname}</h2>
        <h2>Info: {info}</h2>
        <h2>Age: {age}</h2>
        <h2>Gender: {gender}</h2>
      </div>
    </div>
  );
}

export default App;

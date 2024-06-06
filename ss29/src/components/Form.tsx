import React, { useState } from 'react';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [submittedData, setSubmittedData] = useState<{
    email: string;
    password: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData(formData); 
  };

  return (
    <div>
        <h2>Bài 9</h2>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password" name="password" value={formData.password} onChange={handleChange} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default Form;

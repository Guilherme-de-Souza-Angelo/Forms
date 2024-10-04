import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function temo() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs, null, 2)); // Display inputs in a readable format
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
      </label>
      <br />
      
      <label>
        Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Enter your email:
        <input 
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Select your gender:
        <select name="gender" value={inputs.gender || ""} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />

      <label>
        Comments:
        <textarea 
          name="comments" 
          value={inputs.comments || ""} 
          onChange={handleChange}
        />
      </label>
      <br />

      <input type="submit" />
    </form>
  )
}



export default temo
import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  //const [attButton, setAttbutton] = false;

  return (
    <div>
      <h1>GuestList</h1>
      <label>
        First Name{' '}
        <input
          type="string"
          value={firstName}
          onChange={(event) => {
            // 4. Update state variable with new value (text user types in)
            setFirstname(event.currentTarget.value);
          }}
        />
      </label>
      <label>
        Last Name{' '}
        <input
          type="string"
          value={lastName}
          onChange={(event) => {
            // 4. Update state variable with new value (text user types in)
            setLastname(event.currentTarget.value);
          }}
        />
      </label>
    </div>
  );
}

export default App;

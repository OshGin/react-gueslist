import './App.css';
import { useState } from 'react';

function List({ children }) {
  return <ul style={{ backgroundColor: 'white' }}>{children}</ul>;
}

function App() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const index = 1; //change to ID
  const guest = { firstName, lastName };
  //const fullName =
  //const [attButton, setAttbutton] = false;
  //const (submit button) ?????

  return (
    <div>
      <h1>Guest List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          First name:
          <input
            onChange={(e) => {
              setFirstname(e.currentTarget.value);
            }}
            value={firstName}
          />
        </label>
        <label>
          Last Name:
          <input
            onChange={(e) => setLastname(e.currentTarget.value)}
            value={lastName}
          />
        </label>

        <button
          onClick={() => {
            console.log(guest);
          }}
        >
          invite is out
        </button>
      </form>
      <List> new Guest</List>
    </div>
  );
}

export default App;

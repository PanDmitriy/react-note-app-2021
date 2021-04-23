import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
  const [ value, setValue ] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);


  const submitHandler = event => {
    event.preventDefault();
    if (value.trim()) {
      firebase.addNote(value.trim())
      alert.show({ text: 'Added new note!', type: 'success' });
      setValue('');
    } else {
      alert.show({ text: 'Enter a title for the note.'});
    }
    
  }

  return (
    <form onSubmit={submitHandler}>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Write the name of the case."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}
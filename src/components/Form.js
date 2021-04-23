import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {
  const [ value, setValue ] = useState('');
  const { show } = useContext(AlertContext);

  const submitHandler = event => {
    event.preventDefault();
    if (value.trim()) {
      show({ text: ' Added new note!', type: 'success' });
      setValue('');
    } else {
      show({ text: ' Enter a title for the note.'});
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
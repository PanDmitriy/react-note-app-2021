import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Notes = ({ notes }) => {
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  if (notes.length === 0) {
    return (
      <div className="text-center">
        <h6> Список пуст. <br/> Ваша заметка будет первой. </h6>
      </div>
    )
  } 

  const removeHandler = id => {
    firebase.removeNote(id);
    alert.show({text:"Note deleted.", type: "danger"});
  }

  return (
    <ul className="list-group list-group-flush" >
      { notes.map( note => (
          <li 
            className="list-group-item" 
            key={note.id}
          > 
            <div className="note">
              <div>
                <strong> {note.title} </strong>
                <small> {note.date} </small>
              </div>
              <button 
                type="button" 
                className="btn btn-outline-danger btn-sm" 
                onClick={() => removeHandler(note.id)} 
              >
                Delete note
              </button>
            </div>
          </li>
        ))}
    </ul>
  )
}
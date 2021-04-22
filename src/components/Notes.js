import React from 'react';

export const Notes = ({notes}) => {

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
                <small> {new Date().toLocaleDateString()} </small>
              </div>
              <button type="button" className="btn btn-outline-danger btn-sm">Delete note</button>
            </div>
          </li>
        ))}
    </ul>
  )
}
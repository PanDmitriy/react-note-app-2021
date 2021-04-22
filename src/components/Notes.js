import React from 'react';

export const Notes = ({notes}) => {

  return (
    <ul className="list-group list-group-flush py-5" >
      { notes.map( note => (
          <li className="list-group-item" key={note.id}> {note.title} </li>
        ))}
    </ul>
  )
}
import React from 'react';
import { Form } from './Form';
import { Notes } from './Notes';

export const MainPage = () => {
  const notes = new Array(3).fill('').map( (_,i) => ({id: i, title: `Note № ${ i+1 }`}) );
  // console.log(notes);
  return (
    <>
      <div className="container pt-4"> 
        <Form/>
        <Notes notes={notes} />
      </div>
    </>
  );
};
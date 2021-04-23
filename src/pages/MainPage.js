import React from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';

export const MainPage = () => {
  const notes = new Array(3).fill('').map( (_,i) => ({id: i, title: `Note № ${ i+1 }`}) );
  // console.log(notes);
  return (
    <>
      <div className="container pt-3"> 
        <Form/>
        <hr/>
        <Notes notes={notes} />
      </div>
    </>
  );
};
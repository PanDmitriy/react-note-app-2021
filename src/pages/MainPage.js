import React, { useContext, useEffect } from 'react';
import { Form } from '../components/Form';
import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const MainPage = () => {
  const { loading, notes, fetchNotes } = useContext(FirebaseContext);
  
  useEffect( () => {
    fetchNotes();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="container pt-3"> 
        <Form/>
        <hr/>
        { 
          loading ? <Loader/> : <Notes notes={notes}/>
        }
      </div>
    </>
  );
};
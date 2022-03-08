import React, { useReducer } from 'react';
import { ADD_NOTE, REMOVE_NOTE, SHOW_LOADER, FETCH_NOTES } from '../types';
import { FirebaseContext } from "./firebaseContext"
import { firebaseReducer } from './firebaseReducer';
import axios from 'axios'
import { HOST_URL } from '../../shared/const';


export const FirebaseState = ({children}) => {
  const initialState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer( firebaseReducer, initialState );

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get( `${HOST_URL}/notes.json`);
    const payload = Object.keys(res.data || {}).map(key => ({
      ...res.data[key], 
      id:key
    }));
    dispatch({ type:FETCH_NOTES, payload });
  };

  const addNote = async title => {
    const note = {
      title, 
      date: [ 
        new Date().toLocaleTimeString(),
        new Date().toLocaleDateString(), 
      ].join('; ')
    };
    const res = await axios.post(`${HOST_URL}/notes.json`, note);
    const payload = {
      ...note,
      id: res.data.name
    };
    dispatch({ type: ADD_NOTE, payload });
  };

  const removeNote = async id => {
    await axios.delete(`${HOST_URL}/notes/${id}.json`);
    dispatch({ type: REMOVE_NOTE, payload: id })
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader, fetchNotes, addNote, removeNote, 
        loading: state.loading,
        notes: state.notes
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
};
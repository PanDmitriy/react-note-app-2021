import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert.visible) {
    return null;
  };

  return (
  <div className={`container alert alert-${alert.type || "warning"} alert-dismissible mt-4`}>
    <strong>Warning!</strong>
    &nbsp; {alert.text}
    <button 
      type="button" 
      className="btn-close" 
      onClick={hide} 
      aria-label="Close"
    ></button>
  </div>

  )
}
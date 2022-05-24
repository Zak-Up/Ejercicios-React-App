import React from 'react';
import ContactForm from './components/ContactForm';
import CrudApi from './components/CrudApi';
import Modals from './components/Modals';
import SelectsAnidados from './components/SelectsAnidados';


function App() {
  return (
    <>
      <Modals/>
      <hr/>
      <ContactForm/>
      <hr/>
      <SelectsAnidados/>
      <hr/>
      <CrudApi/>
      <hr/>
      
    </>
  );
}

export default App;

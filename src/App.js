import React from 'react';
import ContactForm from './components/ContactForm';
import CrudApi from './components/CrudApi';
import SelectsAnidados from './components/SelectsAnidados';


function App() {
  return (
    <>
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

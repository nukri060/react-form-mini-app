import { useState } from 'react';
import {ContactForm} from './components/Form';
import './App.css';
import { MessageDisplay } from './components/MessageDisplay';

function App() {
  return (
    <>
    <div className="content-wrapper">
      <ContactForm/>
    </div>
    </>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';
import SocialButton from './componentes/SocialButton';
import Registro from './componentes/Registro';
import Alert from './componentes/Alert';

function App() {
  const [alertMessage, setAlertMessage] = useState('');

  return (
    <>
      <Alert message={alertMessage} />
      <Registro setAlertMessage={setAlertMessage} />
    </>
  );
}

export default App;
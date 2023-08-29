import React from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';

export default function Registro({ setAlertMessage }) {
  return (
    <div className="container">
      <div className="redes">
        <SocialButton icon={<i className="fa-brands fa-facebook"></i>} />
        <SocialButton icon={<i className="fa-brands fa-github"></i>} />
        <SocialButton icon={<i className="fa-brands fa-linkedin"></i>} />
      </div>
      <Formulario setAlertMessage={setAlertMessage} />
    </div>
  );
}




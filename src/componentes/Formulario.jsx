import React, { useState } from 'react';

export default function Formulario({ setAlertMessage }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [contraseñaDos, setContraseñaDos] = useState('');

  function validarDatos(e) {
    e.preventDefault();

    if (nombre === '' || correo === '' || contraseña === '' || contraseñaDos === '') {
      setAlertMessage('Debe llenar todos los campos');
    } else if (contraseña !== contraseñaDos) {
      setAlertMessage('Las contraseñas deben ser iguales');
    } else {
      setAlertMessage('Los datos fueron enviados correctamente!');
    }
  }

  return (
    <form onSubmit={validarDatos}>
      <label>Nombre</label>
      <input type="text" name="Nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
      <label>Correo</label>
      <input type="email" name="Correo" className="form-control" onChange={(e) => setCorreo(e.target.value)} value={correo}/>
      <label>Contraseña</label>
      <input type="password" className="form-control" onChange={(e) => setContraseña(e.target.value)} value={contraseña} />
      <label>Confirma tu contraseña</label>
      <input type="password" className="form-control" onChange={(e) => setContraseñaDos(e.target.value)} value={contraseñaDos} />
      <button type="submit" className="btn btn-primary mt-3">Enviar</button>
    </form>
  );
}
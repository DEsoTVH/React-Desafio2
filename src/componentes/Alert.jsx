import React from "react";

export default function Alert({ message }) {
  return (
    <div className={`alert ${message ? 'alert-danger' : 'alert-success'}`}>
      {message || 'Mensaje de éxito por defecto'}
    </div>
  );
}

import { useState } from 'react';

export default function Saludo() {
  const [nombre, setNombre] = useState('');

  const handleCambio = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={handleCambio}
      />
      <h1>Hola {nombre}</h1>
    </div>
  );
}

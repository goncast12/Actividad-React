import { useState } from 'react';

export default function Formulario() {
  const [texto, setTexto] = useState("");

  const handleCambio = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe algo..."
        onChange={handleCambio}
      />
      <p>{texto}</p>
    </div>
  );
}

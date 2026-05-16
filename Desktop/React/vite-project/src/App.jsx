import Saludo from './components/Saludo'
import Contador from './components/Contador'
import Formulario from './components/Formulario'
import './App.css'

function App() {
  return (
    <div>
      <h1>Mi Aplicación React</h1>
      <hr />
      <h2>Componente Saludo</h2>
      <Saludo />
      <hr />
      <h2>Componente Contador</h2>
      <Contador />
      <hr />
      <h2>Componente Formulario</h2>
      <Formulario />
    </div>
  )
}

export default App

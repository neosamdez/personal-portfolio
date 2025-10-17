import Inicio from "./pages/Inicio"
import SobreMim from "./pages/SobreMim"

console.log(window.location)

const pagina = window.location.pathname === '/' ? <Inicio/> : <SobreMim/>

function App() {
  return pagina
}

export default App;

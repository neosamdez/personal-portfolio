import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import SobreMim from "./Pages/SobreMim";
import Menu from "./Componentes/Menu";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/sobremim' element={<SobreMim/>} />
        <Route path='*' element={<div> pagina nao encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;

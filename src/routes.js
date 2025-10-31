import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import SobreMim from "./Pages/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "Pages/Post";
import NaoEncontrada from "Pages/NaoEncontrada";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={<PaginaPadrao />} >
          <Route index element={<Inicio/>} />
          <Route path='sobremim' element={<SobreMim/>} />
        </Route>
        <Route path='/posts/:id' element={<Post/>} />

        <Route path='*' element={<NaoEncontrada/>} />
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes;

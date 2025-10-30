import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import SobreMim from "./Pages/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "Pages/Post";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={<PaginaPadrao />} >
          <Route index element={<Inicio/>} />
          <Route path='sobremim' element={<SobreMim/>} />
          <Route path="posts/:id" element={<Post/>} />
        </Route>

        <Route path='*' element={<div> pagina nao encontrada</div>} />
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes;

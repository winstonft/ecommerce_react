import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Contacto from "./components/Contacto/Contacto";
import { menus } from "./mock";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <NavBar menus={menus} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/categoria/:categoriaid' element={<ItemListContainer />}/>
          <Route exact path='/item/:itemid' element={<ItemDetailContainer />}/>
          <Route exact path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;

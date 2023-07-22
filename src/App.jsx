import React from "react"

import "./css/estilo.css";

import Menu from "./componentes/menu.jsx";
import Inicio from "./componentes/inicio.jsx"
import Venta from "./componentes/venta.jsx"
import Contacto from "./componentes/contacto.jsx"
import Sobre_Nosotros from "./componentes/sobre_nosotros.jsx"

import {Routes, Route, BrowserRouter} from "react-router-dom"


import discord from './imagenes/discord.png';

const App = () => {
  return (
    <div class="cuadricula">
      <div class="nav">
        <img src={discord} class="discord" />

        <h1>Misiotrónica</h1>

        <Menu/>
      </div>

      <div class="section">
        <h1> seccion </h1>

        <Routes>
          <Route path="inicio" element={<Inicio/>}/>
          <Route path="venta" element={<Venta/>}/>
          <Route path="contacto" element={<Contacto/>}/>
          <Route path="sobre_nosotros" element={<Sobre_Nosotros/>}/>
        </Routes>
      </div>

      <div class="footer">
        <h1>footer</h1>
        <p>Copyright© 2023 Misiotrónica / Todos los derechos reservados</p>
      </div>
    </div>
  )
}

export default App;
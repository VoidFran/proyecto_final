import React from "react"

import "./css/estilo.css";

import Menu from "./componentes/menu.js";
import Inicio from "./componentes/inicio.js"
import Venta from "./componentes/venta.js"
import Contacto from "./componentes/contacto.js"
import SobreNosotros from "./componentes/sobre_nosotros.js"
import NoEncontrado from "./componentes/no_encontrado.js"

import {Routes, Route} from "react-router-dom"


import discord from './imagenes/discord.png';

export default function App() {
  return (
    <div class="grid_contenedor">
      <div class="nav">
        <div class="grid-item">
          <div class="contenedor">
            <img src={discord} class="discord" alt=""/>

            <h1>Misiotrónica</h1>

            <Menu/>
          </div>
        </div>
      </div>

      <div class="section">
        <Routes>
          <Route path="" element={<Inicio/>}/>
          <Route path="venta" element={<Venta/>}/>
          <Route path="sobre_nosotros" element={<SobreNosotros/>}/>
          <Route path="contacto" element={<Contacto/>}/>
          <Route path="*" element={<NoEncontrado/>}/>
        </Routes>
      </div>

      <div class="footer">            
        <div class="caja_flexible">
            <p>Copyright© 2023 Misiotrónica / Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  )
}
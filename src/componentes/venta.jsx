import React from "react"
import articulos from "../json/articulos.json";

const Venta = () => {
    return (
        <div>
            <div class="tabla_haeder">
                <table id="tabla_venta">
                    <thead>
                        <tr>
                            <th>Id</th> 
                            <th>Nombre</th>
                            <th>Precio</th>
                        </tr>
                    </thead>

                    <tbody id="tabla_body">
                    </tbody>
                </table>
            </div>
        
            <div class="registro_boton">
                <button id="boton" onClick={leer_local_storge}>Leer local storage</button>
            </div>
        </div>
    )
}

export default Venta;

window.onload = function cargar_pagina() {
    // Al cargar la página se cargan los datos del Json en el Local Storage
    localStorage.setItem("articulos", JSON.stringify(articulos));
}

function leer_local_storge() {
    // Guarda la referencia de la Tabla donde estan almacenados los Jugadores
    let tabla = document.getElementById("tabla_venta");

    const boton = document.getElementById("boton");
    boton.disabled = true;

    // Recorre la Lista donde estan almacenados los Jugadores
    for (let indice of articulos) {
        // Crea una Tabla
        let etiqueta_tr = document.createElement("tr");

        // Crea una Celda para cada Columna
        let etiqueta_td_1 = document.createElement("td");
        let etiqueta_td_2 = document.createElement("td");
        let etiqueta_td_3 = document.createElement("td");
        let etiqueta_td_4 = document.createElement("td");
        let etiqueta_button_1 = document.createElement("button");

        // Crea el Texto para cada Celda
        let texto_td_1 = document.createTextNode(indice.id);
        let texto_td_2 = document.createTextNode(indice.nombre);
        let texto_td_3 = document.createTextNode(indice.precio);
        let texto_boton_1 = document.createTextNode("Comprar");

        // Agrega el Texto para cada Celda
        etiqueta_td_1.appendChild(texto_td_1);
        etiqueta_td_2.appendChild(texto_td_2);
        etiqueta_td_3.appendChild(texto_td_3);
        etiqueta_td_4.appendChild(etiqueta_button_1);
        etiqueta_button_1.appendChild(texto_boton_1);
        etiqueta_button_1.setAttribute("id",texto_td_1);
        //etiqueta_button_1.setAttribute("onclick", "editar_jugador(this)");

        // Agrega las Celdas a la Tabla
        etiqueta_tr.appendChild(etiqueta_td_1);
        etiqueta_tr.appendChild(etiqueta_td_2);
        etiqueta_tr.appendChild(etiqueta_td_3);
        etiqueta_tr.appendChild(etiqueta_td_4);

        // Agrega la Tabla en el Html
        tabla.appendChild(etiqueta_tr);
    }
}
import React from "react"
import articulos from "../json/articulos.json"

import Aire_Acondicionado_Inverter_Eco_Cooling_3550W from "../imagenes/Aire Acondicionado Inverter Eco Cooling 3550W.png"
import Auriculares_vincha_107BS from "../imagenes/Auriculares vincha 107BS.png"
import Monitor_Noblex_24 from "../imagenes/Monitor Noblex 24.png"
import Mouse_Gamer_Nbx from "../imagenes/Mouse Gamer Nbx.png"
import Notebook_14_1 from "../imagenes/Notebook 14.1.png"
import Teclado_Gamer_Nbx from "../imagenes/Teclado Gamer Nbx.png"

let imagenes = [Monitor_Noblex_24, Auriculares_vincha_107BS, Notebook_14_1, Teclado_Gamer_Nbx, Mouse_Gamer_Nbx, Aire_Acondicionado_Inverter_Eco_Cooling_3550W]
let contador = 0;

export default class Venta extends React.Component {
  componentDidMount() {
    // Al cargar la página se cargan los datos del Json en el Local Storage
    contador += 1

    if (contador === 1) {
        leer_local_storge()
    }
    else {
        contador = 0
    }
  }

  render() {
     return (
       <div>
            <div class="tabla_haeder">
                <div class="grid-item">
                    <div class="contenedor">
                        <form>
                            <div class="registro_entrada">
                                <label>Buscar: </label>
                                <input id="buscar" type="text" placeholder="Ingrese nombre" required=""></input>

                                <div class="registro_boton">
                                    <button onClick={buscar_articulo}>Buscar</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="contenedor">
                        <form>
                            <div class="registro_entrada">
                                <label>listado completo</label>
                            </div>

                            <div class="registro_boton">
                                <button onClick={listado}>Listar</button>
                            </div>
                        </form>
                    </div>
                </div>

                <table id="tabla_venta">
                    <tbody id="tabla_body">
                    </tbody>
                </table>
            </div>
       </div>
     )
  }
}

function leer_local_storge() {
    // Guarda la referencia de la Tabla donde estan almacenados los Articulos
    let tabla = document.getElementById("tabla_venta");

    // Guarda la referencia de la busqueda
    let local_storage_busqueda = localStorage.getItem("busqueda");
    let busqueda = JSON.parse(local_storage_busqueda);

    // Recorre la Lista donde estan almacenados los Articulos
    if (busqueda === null) {
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
            let texto_td_1 = document.createElement("img");
            texto_td_1.setAttribute("src", imagenes[indice.id]);
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

            // Agrega las Celdas a la Tabla
            etiqueta_tr.appendChild(etiqueta_td_1);
            etiqueta_tr.appendChild(etiqueta_td_2);
            etiqueta_tr.appendChild(etiqueta_td_3);
            etiqueta_tr.appendChild(etiqueta_td_4);

            // Agrega la Tabla en el Html
            tabla.appendChild(etiqueta_tr);
        }
    }

    else if (busqueda !== null) {
        for (let indice of busqueda) {
            // Crea una Tabla
            let etiqueta_tr = document.createElement("tr");

            // Crea una Celda para cada Columna
            let etiqueta_td_1 = document.createElement("td");
            let etiqueta_td_2 = document.createElement("td");
            let etiqueta_td_3 = document.createElement("td");
            let etiqueta_td_4 = document.createElement("td");
            let etiqueta_button_1 = document.createElement("button");

            // Crea el Texto para cada Celda
            let texto_td_1 = document.createElement("img");
            texto_td_1.setAttribute("src", imagenes[indice.id]);
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

            // Agrega las Celdas a la Tabla
            etiqueta_tr.appendChild(etiqueta_td_1);
            etiqueta_tr.appendChild(etiqueta_td_2);
            etiqueta_tr.appendChild(etiqueta_td_3);
            etiqueta_tr.appendChild(etiqueta_td_4);

            // Agrega la Tabla en el Html
            tabla.appendChild(etiqueta_tr);
        }
    }
}

function buscar_articulo() {
    // Filtra los Articulos por tipo
    let busqueda = articulos.filter(articulo => sin_acentos(articulo.nombre.toLowerCase()) === sin_acentos(document.getElementById("buscar").value.toLowerCase()) || sin_acentos(articulo.marca.toLowerCase()) === sin_acentos(document.getElementById("buscar").value.toLowerCase()) || sin_acentos(articulo.tipo.toLowerCase()) === sin_acentos(document.getElementById("buscar").value.toLowerCase()))

    // Guarda la lista de Busqueda en el Local Storage
    if (busqueda.length >= 1) {
        let guardar = JSON.stringify(busqueda);
        localStorage.setItem("busqueda", guardar);
    }
}

function listado() {
    // Borra la lista de Busqueda en el Local Storage
    localStorage.removeItem("busqueda");
}

let sin_acentos = (function() {
    let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
         a = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
        re = new RegExp('['+de+']' , 'ug');

    return texto => texto.replace( re, match => a.charAt(de.indexOf(match)));
} )();
/* 
1) EX1 - Directorio de Usuarios
Objetivo: Listar usuarios desde una API, filtrar por nombre y ver detalle.
API: https://jsonplaceholder.typicode.com/users

Cargar usuarios con axios usando async/await.
• Renderizar una tabla con jQuery: Nombre, Email, Empresa.
• Filtro en vivo por nombre (input de texto).
• Al hacer clic en un usuario, mostrar detalle (teléfono y dirección).
• Usar arrow functions en callbacks/eventos y métodos de arreglo.
• Imprimir en consola:
o Resumen de usuarios cargados (cantidad y primera fila).
o Término usado en el filtro y cantidad de coincidencias.
o Detalle del usuario cuando se hace clic.

Criterios de aceptación:
• Muestra 10 usuarios.
• Filtro funciona sin recargar la página.
• Detalle abre y cierra correctamente.
• Código con ES6 (const/let, arrow, templates, async/await).
• Consola con logs claros de carga, filtro y selección

*/

const url = "https://jsonplaceholder.typicode.com/users";

$(document).ready(() => {

    //Todo: Axios
    $.ajax({
        type: "GET",
        url: url,
        success: (response) => {

            response.forEach(({ name, email, company }) => {
                console.log(`Nombre: ${name}, Email: ${email}, Compañia: ${company.name}`)
            })

            // $("#datos").html(JSON.stringify(response))
        }
    })

})


//     markup = "<tr><td>This is row " + "</td></tr>";
//      tableBody = $("table tbody");
// tableBody.append(markup);

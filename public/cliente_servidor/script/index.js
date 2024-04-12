function agregarRecetas(datos){
  //Obtengo el contenedor donde iran todas las recetas
  const contenedor = document.getElementById('contenedorRecetas');

  //Creo constantes con los estilos de Bootstrap que voy a estar utilizando
  const styleRow = "row color-grid p-3 mx-5";
  const styleNombreReceta = "text-center fw-bold";
  const styleFoto = "size-img m-auto";
  const styleIngredientes = "text-center fw-bold fs-4";
  const stylePasos = "text-center fw-bold";

  //Empiezo a agregar las recetas
  datos.forEach(element => {

    //Creo todos los elementos
    const fila = document.createElement("div");
    const columnaFoto = document.createElement("div");
    const columnaIngredientes = document.createElement("div");
    const columnaPasos = document.createElement("div");
    const tituloFoto = document.createElement("h2");
    const tituloIngredientes = document.createElement("h2");
    const tituloPasos = document.createElement("h2");
    const imagen = document.createElement("img");
    const ingredientes = document.createElement("ul");
    const pasos = document.createElement("ol");

    //Agreco clases con estilos a los contenedores creados
    fila.className = styleRow;
    columnaFoto.className = "col";
    columnaIngredientes.className = "col";
    columnaPasos.className = "col";
    tituloFoto.className = styleNombreReceta;
    tituloIngredientes.className = styleIngredientes;
    tituloPasos.className = stylePasos;
    imagen.className = styleFoto;

    //Agrego la infotmacion
    tituloFoto.innerHTML = element.nombre;
    imagen.src = element.imagen;
    tituloIngredientes.innerHTML = "Ingredientes";
    tituloPasos.innerHTML = "Pasos";
    
    //Agrego los ingredientes a la lista de ingredientes
    element.ingredientes.forEach(ing => {
       const ingrediente = document.createElement("li");
       ingrediente.innerHTML = ing;
       ingredientes.appendChild(ingrediente);
    })
    //Agrego los pasos a la lista de pasos
    element.pasos.forEach(paso => {
        const pas = document.createElement("li");
        pas.innerHTML = paso;
        pasos.appendChild(pas);
    })

    //Agrego los elementos a su respectiv columna
    columnaFoto.appendChild(tituloFoto);
    columnaFoto.appendChild(imagen);

    columnaIngredientes.appendChild(tituloIngredientes);
    columnaIngredientes.appendChild(ingredientes);

    columnaPasos.appendChild(tituloPasos);
    columnaPasos.appendChild(pasos);

    //Agrego las columnas a la fila
    fila.appendChild(columnaFoto);
    fila.appendChild(columnaIngredientes);
    fila.appendChild(columnaPasos);

    //Agrego la fila al HTML
    contenedor.appendChild(fila);
  })
}

// Hacer una solicitud GET a un endpoint
const url = 'http://localhost:3001/recetas'
fetch(url)
  .then(response => {
    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error('Hubo un problema al recuperar los datos.');
    }
    // Convertir la respuesta en formato JSON
    return response.json();
  })
  .then(data => {
    // Manipular los datos obtenidos
    agregarRecetas(data);
  })
  .catch(error => {
    // Capturar y manejar errores
    console.error('Error:', error);
  });

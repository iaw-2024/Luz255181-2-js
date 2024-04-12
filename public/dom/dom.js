const recetas = [
    {
        "nombre": "Torta Clasica",
        "ingredientes": [
            "2 huevos",
            "1 taza azúcar",
            "1/2 taza aceite",
            "2 tazas harina leudante",
            "3/4 taza leche",
            "Esencia de vainilla a gusto"
        ],
        "pasos": [
            "Romper los huevos y agregar la taza de azúcar y la esencia de vainilla para luego batir aproximadamente 1 minuto.",
            "Añadir el aceite y mezclar. Luego agregar una taza de harina e incorporar nuevamente.",
            "Agregar la leche y mezclar todo con cuidado.",
            "Por último agregar la taza de harina restante y mezclar todo por aproximadamente 1 minuto.",
            "Poner la preparación en un molde enharinado y llevar al horno. Mí horno es eléctrico por lo que tardo 40 minutos aprox a 160°."
        ],
        "imagen": "https://img-global.cpcdn.com/recipes/3d7a14d3ddc2f6ea/680x482cq70/torta-facil-y-economica-foto-principal.webp"
    },
    {
        "nombre": "Arroz con Leche",
        "ingredientes": [
            "200g Arroz Blanco",
            "1l Leche",
            "150gr Azúcar",
            "Escencia de Vainilla",
            "Ramitas Canela/Canela en Polvo",
            "Ralladura de Limón"
        ],
        "pasos": [
            "Vamos a poner la leche en una olla y le vamos a agregar el azúcar y los ingredientes para aromatizar en la leche.",
            "Vamos a dejar la leche en la hornalla (a fuego máximo) hasta que la esté a punto de romper hervor.",
            "Es ahí donde agregamos el arroz y bajamos el fuego a mínimo.",
            "Cada 10 minutos vamos a ir revolviendo hasta que veamos que nuestro arroz tiene la textura que deseemos."
        ],
        "imagen": "https://img-global.cpcdn.com/recipes/f8463495b9d02ebe/680x482cq70/arroz-con-leche-me-quiero-casar-foto-principal.webp"
    },
    {
        "nombre": "Budin de Banana y Chocolate",
        "ingredientes": [
            "3 Bananas Pequeñas (250gr)",
            "100gr Manteca, 170gr Azúcar",
            "2 Huevos",
            "200gr Harina Leudante",
            "1 Cucharadita Canela en Polvo",
            "50gr Chocolate",
            "50gr Nueces (Opcional)"
        ],
        "pasos": [
            "Pisar las bananas hasta que quede como un puré.",
            "Mezclar en un bowl aparte la manteca con el azúcar.",
            "Incorporar los huevos y batir.",
            "Luego agregar el puré de banana y batir de nuevo.",
            "Añadir la harina y la canela y mezclar suavemente sin batir hasta incoporar todo. Por último agregar el chocolate (yo utilicé 3 barritas de chocolate amargo picadas) y un puñado de nueces (opcional).",
            "Verter la mezcla en una budinera grande previamente enmantecada o en dos budineras pequeñas.",
            "Poner en el horno previamente calentado a 180°C durante 40 minutos. Está listo cuando metemos un cuchilo en el medio y sale limpio."
        ],
        "imagen": "https://img-global.cpcdn.com/recipes/1b6fd46622749243/680x482cq70/budin-de-banana-y-chocolate-riquisimo-foto-principal.webp"
    },
    {
        "nombre": "Pan Casero con Tomates",
        "ingredientes": [
            "35ogr Harina Para Panes",
            "200ml Agua Tibia",
            "15gr Manteca Pomada",
            "1 Pizca de Sal",
            "Orégano a Gusto",
            "Tomillo a Gusto",
            "Sal Gruesa (Para tirrar por arriba)",
            "Tomates Cherry"
        ],
        "pasos": [
            "Hacemos una corona con la harina, agregamos los secos (la sal, el azúcar y la manteca pomada). Mezclamos y vamos amasando agregando agua tibia en la mezcla.",
            "Cuando se forme la masa (tiene que ser elastica) la ponemos en un bowl y tapamos la deje unos 30 min aproximadamente.",
            "Esperas a que la masa duplica su tamaño y haces el pan con la forma que quieras.",
            "Los pinte con manteca derretida y tire las hierbas por arriba junto con los tomates cherry y la sal gruesa.",
            "En 30 min de horno a 180°."
        ],
        "imagen": "https://img-global.cpcdn.com/recipes/a9b6c2daf0b443d2/680x482cq70/pan-casero-con-tomates-foto-principal.webp"
    }
];

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

agregarRecetas(recetas);
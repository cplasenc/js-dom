/** 
 * Extrae los valores del array 
 */
let nombres = farmacias.map(farmacia => farmacia.NOMBRE);
const telefonos = farmacias.map(farmacia => farmacia.TELEFONO);
const mapaY = farmacias.map(farmacia => farmacia.GRAD_Y);
const mapaX = farmacias.map(farmacia => farmacia.GRAD_X);
const getUrl = farmacias.map(farmacia => farmacia.WEB);
const direccion = farmacias.map(farmacia => farmacia.DIRECCION);
var barrios = farmacias.map(farmacia => farmacia.BARRIO);
const distritos = farmacias.map(farmacia => farmacia.DISTRITO);
const entreSemana = farmacias.map(farmacia => farmacia.LUNES);
const sabado = farmacias.map(farmacia => farmacia.SABADO);
const domingo = farmacias.map(farmacia => farmacia.DOMINGO);

//creacion del container
let divContainer = document.createElement("div");
divContainer.className = "container";

//creacion del titulo
let h1 = document.createElement("h1");
h1.className = "h1 text-center pt-5";

//icono farmacia
let iconoFarmacia = document.createElement("i");
iconoFarmacia.className = "fas fa-clinic-medical";
h1.innerHTML = "Farmacias ";

h1.appendChild(iconoFarmacia);
divContainer.appendChild(h1);

//creacion de filtro de busqueda
let divForm = document.createElement("div");
divForm.className = "input-group input-group-lg pb-5 pt-2";
divForm.setAttribute("id", "miBusqueda");
divContainer.appendChild(divForm);

let divForm2 = document.createElement("div");
divForm2.className = "input-group-prepend";
divForm.appendChild(divForm2);

//dropdown
var buttonDropdown = document.createElement("button");
buttonDropdown.className = "btn btn-outline-secondary dropdown-toggle";
buttonDropdown.type = "button";
buttonDropdown.id = "miBoton";
buttonDropdown.setAttribute("data-toggle", "dropdown");
buttonDropdown.innerHTML = "Buscar por";

let dropdownMenu = document.createElement("div");
dropdownMenu.className = "dropdown-menu";

//items dropdown
let itemBarrios = document.createElement("a");
itemBarrios.className = "dropdown-item";
itemBarrios.innerHTML = "Barrios";
itemBarrios.setAttribute("onclick", "cambiarTexto()");

let itemDistritos = document.createElement("a");
itemDistritos.className = "dropdown-item";
itemDistritos.innerHTML = "Distritos";
itemDistritos.setAttribute("onclick", "cambiarTexto()");

dropdownMenu.appendChild(itemBarrios);
dropdownMenu.appendChild(itemDistritos);

divForm2.appendChild(buttonDropdown);
divForm2.appendChild(dropdownMenu);

//barra input
let input = document.createElement("input");
input.type = "text";
input.className = "form-control";
input.placeholder = "Busca por barrio o distrito...";
divForm.appendChild(input);

//creacion rows
let divRows = document.createElement("div");
divRows.className = "row";
divContainer.appendChild(divRows);

document.body.appendChild(divContainer);

/**  
 * Recorre el array del JSON
 * Imprime las cards y sus componentes 
 */
function printCards() {
    for (let i = 0; i < farmacias.length; i++) {

        //creacion columnas
        let divCols = document.createElement("div");
        divCols.className = "col-4";
        divRows.appendChild(divCols);

        //creacion cards
        let divCards = document.createElement("div");
        divCards.className = "card m-1";
        divCols.appendChild(divCards);

        //creacion distrito
        let headerDistrito = document.createElement("div");
        headerDistrito.className = "card-header text-white bg-dark distrito";
        headerDistrito.id = "headerDistrito";
        headerDistrito.innerHTML = "Distrito: " + distritos[i];
        divCards.appendChild(headerDistrito);

        //crecion de card header - barrios
        let headerBarrio = document.createElement("div");
        headerBarrio.className = "card-header text-white bg-secondary barrio";
        headerBarrio.id = "headerBarrio";
        headerBarrio.setAttribute("color", "primary");
        headerBarrio.innerHTML = "Barrio: " + barrios[i];
        divCards.appendChild(headerBarrio);

        //creacion card body
        let divCardsBody = document.createElement("div");
        divCardsBody.className = "card-body";
        divCards.appendChild(divCardsBody);

        //creacion card title - nombres
        let cardTitle = document.createElement("h5");
        cardTitle.id = "tituloFarmacia";
        cardTitle.className = "card-title";
        cardTitle.innerHTML = nombres[i];
        divCardsBody.appendChild(cardTitle);

        //creacion list-group (ul)
        let listGroup = document.createElement("ul");
        listGroup.className = "list-group list-group-flush";
        divCards.appendChild(listGroup);

        //creacion horario
        let cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerHTML = "<small>L-V: " + entreSemana[i].replace(/,/g, ' ')
            + "<br/>Sabado: " + sabado[i].replace(/,/g, ' ')
            + "<br/>Domingo: " + domingo[i].replace(/,/g, ' ') + "</small>";
        divCardsBody.appendChild(cardText);

        //creacion list-group-item (li) - telefonos
        let listGroupItem1 = document.createElement("li");
        listGroupItem1.className = "list-group-item";
        listGroupItem1.innerHTML = telefonos[i];
        listGroup.appendChild(listGroupItem1);

        //creacion list-group-item (li) - direccion
        let listGroupItem2 = document.createElement("li");
        listGroupItem2.className = "list-group-item";
        listGroupItem2.innerHTML = direccion[i];
        listGroup.appendChild(listGroupItem2);

        //creacion footer
        let cardFooter = document.createElement("div");
        cardFooter.className = "card-footer";
        divCards.appendChild(cardFooter);

        //creacion enlace a mapa
        //https://maps.google.com/maps?daddr=28.8357,-14.23423
        let linkMapa = document.createElement("a");
        let linkTextoMapa = document.createTextNode(" Como llegar ");

        //icono mapa
        let iconoMapa = document.createElement("i");
        iconoMapa.className = "fas fa-map-marker-alt";
        linkMapa.appendChild(iconoMapa);

        linkMapa.appendChild(linkTextoMapa);
        linkMapa.href = "https://maps.google.com/maps?daddr=" + mapaY[i] + "," + mapaX[i];
        linkMapa.setAttribute("target", "_blank");
        cardFooter.appendChild(linkMapa);

        //creacion enlace a web
        if (getUrl[i] == undefined) {

        } else {
            var linkWeb = document.createElement("a");
            var linkTextoWeb = document.createTextNode(" Web");

            var iconoWeb = document.createElement("i");
            iconoWeb.className = "fas fa-globe";
            linkWeb.appendChild(iconoWeb);

            linkWeb.appendChild(linkTextoWeb);
            linkWeb.setAttribute("href", getUrl[i]);
            linkWeb.setAttribute("target", "_blank");
            cardFooter.appendChild(linkWeb);
        }
    }
}
printCards();

//parametro para buscar
var miDistrito = document.getElementById("headerDistrito").className;
var miBarrio = document.getElementById("headerBarrio").className;

/** 
 * Implementacion de filtro y busqueda
 * Recoge el valor del input
 * Recoge el valor de la clase Bootstrap, recorre sus valores(text), muestra los que coinciden 
 * @param {string} buscaPor - Nombre de la clase Bootstrap
 */
function buscar(buscaPor) {
    const barraBuscar = document.getElementById("miBusqueda").querySelector("input");
    barraBuscar.addEventListener("keyup", function (e) {
        const inputIntroducido = e.target.value.toLowerCase();
        const buscarHeader = document.getElementsByClassName(buscaPor);
        Array.from(buscarHeader).forEach(function (buscarX) {
            const title = buscarX.textContent;
            if (title.toLowerCase().indexOf(inputIntroducido) == -1) {
                //-1 = no coincide
                buscarX.parentElement.parentElement.style.display = "none";
            } else {
                //coincide
                buscarX.parentElement.parentElement.style.display = "block";
            }
        })
    })
}

/** 
 * Captura el click
 * Modifica el texto en el dropdown por el seleccionado
 * Busca por el seleccionado
 */
function cambiarTexto() {
    dropdownMenu.onclick = function (event) {
        let target = event.target || event.srcElement;

        document.getElementById("miBoton").innerHTML = target.innerHTML;

        if (buttonDropdown.innerHTML == "Distritos") {
            console.log("buscando por distrito");
            buscar(miDistrito);
        } else if (buttonDropdown.innerHTML == "Barrios") {
            console.log("buscando por barrio");
            buscar(miBarrio);
        } else {
            buscar(miBarrio);
        }
    };
}
//por defecto busca por barrio
buscar(miBarrio);
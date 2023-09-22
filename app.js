
class item{
    constructor (nombre, precio, imagen){
    this.nombre = nombre;
    this.precio = precio ;
    this.imagen = imagen;
}
}

const medicine = new item ("medicine", 80 , "medicine.png");
const weapons = new item ("weapons", 180 , "weapons.png");
const armor = new item ("armor" , 90, "armor.png");


const inventario =[];

let oro = 1000;

const elOro = document.querySelector("#oro span"); 
elOro.innerText = oro;
const elInventario = document.getElementById("inventario");

function comprar (itemDelJuego){
    if (oro - itemDelJuego.precio >= 0){
        inventario.push (itemDelJuego);
        oro = oro - itemDelJuego.precio ; 
        
    console.log ("inventario:", inventario)
    console.log ("oro:", oro)
    actualizarHTML();

    } else {
        alert(`No tenés el oro suficiente para comprar ${itemDelJuego.nombre}.`);
    }
}

function vender(nombreDelItem){
    const itemEncontrado = inventario.find ((item)=> item.nombre==nombreDelItem);
    
    if (itemEncontrado){    
    oro += itemEncontrado.precio;
    inventario.splice(inventario.indexOf(itemEncontrado), 1);

    actualizarHTML();
    }
}

function actualizarHTML(){
    elOro.innerText = oro ;
    elInventario.innerHTML="";
    for (const itemDelJuego of inventario){
        const indice= inventario.indexOf(itemDelJuego);
        const li = 
        `<li onclick= "vender('${itemDelJuego.nombre}')">
        <img src ="img/${itemDelJuego.imagen}"alt="${itemDelJuego.imagen}" /> 
         </li> `;
        elInventario.innerHTML +=li
    }
}
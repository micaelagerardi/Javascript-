// Solicitamos al usuario que ingrese el lugar a donde quiere viajar y se le indica el valor del viaje

let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese la edad"));
while (edad < 18 && nombre != " ") {
  alert("Edad incorrecta, tiene que ser mayor a 18");
  edad = parseInt(prompt("Ingrese nuevamente la edad"));
}

console.log("El nombre ingresado es " + nombre);
console.log("La edad es: " + edad);

const destinoDondeQuiereViajar = prompt(
  "Elija uno de nuestros destinos al que que quisiera viajar : España - Brasil - Chile - Portugal - Panama "
);

let costoDeViaje = 0;

switch (destinoDondeQuiereViajar) {
  case "España":
    alert((costoDeViaje = "El costo del viaje es: USD 400"));
    break;

  case "Brasil":
    alert((costoDeViaje = "El costo del viaje es: USD 200"));
    break;

  case "Chile":
    alert((costoDeViaje = "El costo del viaje es: USD 150"));
    break;

  case "Portugal":
    alert((costoDeViaje = "El costo del viaje es: USD 350"));
    break;

  case "Panama":
    alert((costoDeViaje = "El costo del viaje es: USD 350"));
    break;

  default:
    alert(
      (costoDeViaje =
        "Este pais no se encuentra en nuestra la lista, puede comunicarse con nosotros para un valor personalizado")
    );
}

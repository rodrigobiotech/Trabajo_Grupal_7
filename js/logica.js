var contador_carrito = 0;
var precioTotalCompra = 0;
var cantidadProcuctos = 0;

function login_usuario() {
  var usuario = document.getElementById("login_usuario").value;
  var pass = document.getElementById("login_pass").value;

  if (usuario === pass && usuario.length > 0) {
    window.open("productos.html");
  } else {
    document.getElementById("login_usuario").value = "";
    document.getElementById("login_pass").value = "";
  }
}

function agregar_producto(valorInput, codigoProducto, precioUnitario) {
  var valor_input = parseInt(document.getElementById(valorInput).value);

  // setea el nuevo valor del imput
  valor_input++;
  document.getElementById(valorInput).value = valor_input;

  //precioTotal por producto
  var precio_total = precioUnitario * valor_input;

  // detalle del producto en el carro
  
  // condicional para verificar que hay un p de detalle de producto en el carro(tarjeta) y lo elimina
  //porque necesitamos setearlos (lo eliminamos y creamos nuevamente)
  if (valor_input > 1) {
    var productoActualizar = document.getElementById(codigoProducto);
    productoActualizar.remove();
  }
  var producto = document.getElementById("producto");
  var detalle = document.createElement("p");
  producto.appendChild(detalle);

  //crea una nuevo p detalle de producto
  detalle.innerHTML =
    "Codigo: " +
    codigoProducto +
    " | Cantidad : " +
    valor_input +
    " | Precio Unitario: $ " +
    precioUnitario +
    " | Precio Total: $" +
    precio_total;
  detalle.setAttribute("id", codigoProducto);

  // actualice cantidad total carrito
  contador_carrito++;
  var sumario = document.getElementById("summaryCarrito");
  sumario.innerHTML = "La cantidad es: " + contador_carrito;

  // actualiza cantidad de productos y Precio total de compra. último parrafo
  
  // va a buscar si encuentra el parrafo con un id predefinida
  var totalCompra = document.getElementById("totalCompra");

  // si encuentra el id lo elimina para setear y crear otro con datos actualizados 
  if (totalCompra != null) {
    totalCompra.remove();
  }

  var detalle_total = document.createElement("p");
  detalle_total.setAttribute("id", "totalCompra");
  producto.appendChild(detalle_total);
  cantidadProcuctos++;
  precioTotalCompra = precioTotalCompra + parseInt(precioUnitario);
  detalle_total.innerHTML =
    "Cantidad de productos: " +
    cantidadProcuctos +
    " | Total Precio Productos: $" +
    precioTotalCompra;
}

function restar_producto(valorInput, codigoProducto, precioUnitario) {
  var valor_input = parseInt(document.getElementById(valorInput).value);

  // comprueba que el valor del imput sea > 0, para que no quede en -
  if (valor_input > 0) {
    // setea el nuevo valor del imput, restando 1
    valor_input--;
    document.getElementById(valorInput).value = valor_input;

    //precioTotal
    var precio_total = precioUnitario * valor_input;

    // detalle del carro
    var productoActualizar = document.getElementById(codigoProducto);
    productoActualizar.remove();
    if (valor_input > 0) {
      var producto = document.getElementById("producto");
      var detalle = document.createElement("p");
      producto.appendChild(detalle);

      detalle.innerHTML =
        "Codigo: " +
        codigoProducto +
        " | Cantidad: " +
        valor_input +
        " | Precio Unitario: $" +
        precioUnitario +
        " | Precio Total: $" +
        precio_total;
      detalle.setAttribute("id", codigoProducto);
    }
    // actualice cantidad total carrito
    contador_carrito--;
    var sumario = document.getElementById("summaryCarrito");
    sumario.innerHTML = "La cantidad es: " + contador_carrito;

    // actualiza cantidad de productos y Precio total de compra
    var totalCompra = document.getElementById("totalCompra");
    if (totalCompra != null) {
      totalCompra.remove();
    }

    cantidadProcuctos--;
    precioTotalCompra = precioTotalCompra - parseInt(precioUnitario);
    console.log("cantPro " + cantidadProcuctos);
    console.log("preciototal " + precioTotalCompra);

    var detalle_total = document.createElement("p");
    detalle_total.setAttribute("id", "totalCompra");
    var producto = document.getElementById("producto");
    producto.appendChild(detalle_total);

    detalle_total.innerHTML =
      "Cantidad de productos: " +
      cantidadProcuctos +
      " | Total Precio Productos: $" +
      precioTotalCompra;
  }
}

// cerrar modal
function cerrarModal() {
  // Obtén una referencia al elemento del modal
  var modal = document.getElementById("modal2");

  // Establece el temporizador para cerrar el modal después de 5 segundos (5000 milisegundos)
  setTimeout(function () {
    // Oculta el modal estableciendo su estilo de visualización en "none"
    modal.style.display = "none";
  }, 5000);

  setTimeout(function () {
    window.open("productos.html");
  }, 5000);
}

import { productos } from "./productos.js";

// Definir la función globalmente
window.agregarAlCarrito = function (nombre, descripcion, precio) {
    // Crear un objeto con los detalles del producto
    const producto = { nombre, descripcion, precio };
    // Obtener el carrito actual desde localStorage (si existe)
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    // Añadir el nuevo producto al carrito
    carrito.push(producto);
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // Opcional: mostrar un mensaje de confirmación o alerta
    alert(`Producto ${nombre} agregado al carrito`);
    console.log(carrito);
};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("productos-container");
    const containerCarrito = document.getElementById("containerCarrito");

    if (!container) {
        console.error("Contenedor 'productos-container' no encontrado");
        return;
    }

    productos.forEach(producto => {
        const card = document.createElement("article");
        card.className = "bg-white p-6 rounded-lg shadow-md";
        card.innerHTML = `
            <h2 class="text-xl font-bold mb-4">${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p class="text-lg font-semibold text-gray-700 mb-4">$${producto.precio}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onclick="agregarAlCarrito('${producto.nombre}', '${producto.descripcion}', ${producto.precio})">Comprar</button>
        `;
        container.appendChild(card);
    });

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.forEach(producto => {
        const productoEnCarrito = document.createElement("div");
        productoEnCarrito.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>$${producto.precio}</p>
        `;
        containerCarrito.appendChild(productoEnCarrito);
    });
});

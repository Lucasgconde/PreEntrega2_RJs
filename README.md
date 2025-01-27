# **Sponsor Dios Shop**

¡Bienvenido a **Sponsor Dios Shop**! Este proyecto es un mini e-commerce creado con **React**, donde se implementan funcionalidades básicas para simular una tienda en línea.

---

## **¿Qué hace esta página?**

El objetivo de este proyecto es construir una base funcional para un e-commerce con las siguientes características:
- Menú de navegación con categorías funcionales.
- Listado de productos obtenidos de un mock.
- Detalle de cada producto con un contador funcional estilizado con Bootstrap.
- Uso de **React Router DOM** para la navegación entre páginas.
- Estilo responsivo gracias a Bootstrap.

---

## **¿Qué contiene el proyecto?**

### **Carpeta `components`:**
Aquí se encuentran los principales componentes de la aplicación:
- **NavBar.jsx:**  
  Incluye:
  - Categorías clickeables (`Nuevos`, `Ofertas`, `Más Vendidos`).
  - Un ícono de carrito (componente `CartWidget.jsx`).
  - Diseño estilizado con Bootstrap.

- **CartWidget.jsx:**  
  Representa el carrito de compras, mostrando un ícono y un número fijo (por ahora).

- **ItemListContainer.jsx:**  
  Renderiza un mensaje de bienvenida y una lista de productos.

- **ItemDetailContainer.jsx:**  
  Muestra el detalle de un producto seleccionado y un contador funcional para ajustar la cantidad.

- **ItemCount.jsx:**  
  Contador estilizado con botones rojos y verdes para decrementar e incrementar respetando el stock.

### **Carpeta `mock`:**
Contiene un archivo `data.jsx` que simula un catálogo de productos con información básica (nombre, precio, categoría, imagen, etc.).

---

## **¿Cómo se ve?**

Aunque no incluimos una vista previa aquí, la página tiene un diseño estilizado con Bootstrap, incluyendo:
- Menú de navegación limpio y funcional.
- Tarjetas para cada producto.
- Detalles de producto con estilos aplicados.

---

## **¿Qué puedo mejorar?**

Este proyecto es una base inicial, con ideas para continuar desarrollando:
- Implementar un carrito funcional que actualice su cantidad de productos.
- Agregar un filtro dinámico para productos por categoría.
- Conectar el catálogo con una base de datos (por ejemplo, **Firebase**).
- Mejorar los estilos para dispositivos móviles (diseño responsivo).
- Integrar un sistema de login para usuarios.

# Cafetal Sobre Piedra - Backend API

## Descripción
API REST desarrollada para la gestión de la tienda Cafetal Sobre Piedra. 
Permite realizar operaciones CRUD sobre usuarios, productos y pedidos.

## Autores
| Nombre | Rol |
|--------|-----|
| Engelberth Pico | Desarrollador Backend |

## Requisitos previos
- Node.js v18 o superior
- npm
- Cuenta en MongoDB Atlas

## Instalación y ejecución
1. Clona el repositorio
   git clone https://github.com/EngelberthPico/Cafetal-sobre-piedra.git

2. Instala las dependencias
   npm install

3. Crea un archivo .env en la raíz con las siguientes variables
   PORT=3000
   MONGODB_URI=tu_connection_string_de_atlas

4. Inicia el servidor
   npm run dev

## Endpoints disponibles
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/products | Obtener todos los productos |
| GET | /api/products/:id | Obtener un producto |
| POST | /api/products | Crear un producto |
| PUT | /api/products/:id | Actualizar un producto |
| DELETE | /api/products/:id | Eliminar un producto |
| GET | /api/users | Obtener todos los usuarios |
| GET | /api/users/:id | Obtener un usuario |
| POST | /api/users | Crear un usuario |
| PUT | /api/users/:id | Actualizar un usuario |
| DELETE | /api/users/:id | Eliminar un usuario |
| GET | /api/orders | Obtener todos los pedidos |
| GET | /api/orders/:id | Obtener un pedido |
| POST | /api/orders | Crear un pedido |
| PUT | /api/orders/:id | Actualizar un pedido |
| DELETE | /api/orders/:id | Eliminar un pedido |

## Estado del proyecto
En desarrollo ⚙️

## Contacto
Engelberth Pico - Engelberthyam@gmail.com
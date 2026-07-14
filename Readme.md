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

3. Crea un archivo .env en la raíz (puedes copiar .env.example) con las siguientes variables
   PORT=3000
   MONGODB_URI=tu_connection_string_de_atlas
   JWT_SECRET=un_secreto_largo_y_aleatorio
   JWT_EXPIRES_IN=1d

4. Inicia el servidor
   npm run dev

## Autenticación
Las rutas privadas requieren enviar el token JWT en el header:
   Authorization: Bearer <token>

Ese token se obtiene al hacer login o registro. Las rutas marcadas como "admin" además
requieren que el usuario autenticado tenga rol `admin`.

## Endpoints disponibles
| Método | Ruta | Acceso | Descripción |
|--------|------|--------|-------------|
| POST | /api/auth/register | Público | Registrar un usuario |
| POST | /api/auth/login | Público | Iniciar sesión |
| GET | /api/auth/me | Privado | Ver mi perfil |
| GET | /api/products | Público | Obtener todos los productos |
| GET | /api/products/:id | Público | Obtener un producto |
| POST | /api/products | Admin | Crear un producto |
| PUT | /api/products/:id | Admin | Actualizar un producto |
| DELETE | /api/products/:id | Admin | Eliminar un producto |
| GET | /api/users | Admin | Obtener todos los usuarios |
| GET | /api/users/:id | Admin | Obtener un usuario |
| POST | /api/users | Admin | Crear un usuario |
| PUT | /api/users/:id | Admin | Actualizar un usuario |
| DELETE | /api/users/:id | Admin | Eliminar un usuario |
| GET | /api/orders | Admin | Obtener todos los pedidos |
| GET | /api/orders/:id | Admin | Obtener un pedido |
| POST | /api/orders | Privado | Crear un pedido |
| PUT | /api/orders/:id | Admin | Actualizar un pedido |
| DELETE | /api/orders/:id | Admin | Eliminar un pedido |

## Estado del proyecto
En desarrollo ⚙️

## Contacto
Engelberth Pico - Engelberthyam@gmail.com
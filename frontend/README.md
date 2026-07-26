# Cafetal Sobre Piedra

Aplicación web full stack (MEAN) para la tienda de café de especialidad **Cafetal Sobre Piedra**, un proyecto real de San Vicente de Chucurí, Santander — fundado por Nathalia, Rafael y Jesús ("Chucho") en enero de 2023.

## Descripción general

Plataforma de e-commerce que permite a los clientes explorar el catálogo (café, vino de café, accesorios), agregar productos al carrito y completar la compra como invitados o con cuenta registrada. Incluye:

- Catálogo de productos con validación de stock en tiempo real
- Carrito de compras y checkout con cálculo de total y validación de inventario en el servidor
- Registro e inicio de sesión con autenticación JWT y roles (cliente/admin)
- Perfil de usuario editable (nombre, teléfono, dirección)
- Panel de administración con CRUD completo de productos
- Formulario de solicitud para nuevos distribuidores
- Páginas informativas: Historia del negocio, Certificaciones oficiales (Sello Café de Colombia, Denominación de Origen), Recetas, Programa de fidelidad, Contacto

## Autores

| Nombre | Rol |
|--------|-----|
| Engelberth Pico | Desarrollo full stack (backend y frontend) |

## Requisitos previos

- Node.js v18 o superior
- npm
- Angular CLI (`npm install -g @angular/cli`)
- Cuenta en MongoDB Atlas

## Instalación y ejecución

### Backend

1. Clona el repositorio

git clone https://github.com/EngelberthPico/Cafetal-sobre-piedra.git
cd Cafetal-sobre-piedra


2. Instala las dependencias

npm install


3. Crea un archivo `.env` en la raíz (puedes copiar `.env.example`) con las siguientes variables

PORT=3000
MONGODB_URI=tu_connection_string_de_atlas
JWT_SECRET=un_secreto_largo_y_aleatorio
JWT_EXPIRES_IN=1d
ADMIN_EMAIL=correo_del_admin
ADMIN_PASSWORD=contraseña_del_admin
ADMIN_NOMBRE=Nombre del admin


4. Inicia el servidor

npm run dev

   El backend queda disponible en `http://localhost:3000`.

5. (Opcional) Crea el usuario administrador

node scripts/createAdmin.js


### Frontend

1. Desde la raíz del proyecto, entra a la carpeta del frontend

cd frontend


2. Instala las dependencias

npm install


3. Inicia el servidor de desarrollo

ng serve

   La aplicación queda disponible en `http://localhost:4200`.

## Autenticación

Las rutas privadas requieren enviar el token JWT en el header:

Authorization: Bearer <token>

Ese token se obtiene al hacer login o registro. Las rutas marcadas como "Admin" además requieren que el usuario autenticado tenga rol `admin`.

## Endpoints disponibles

| Método | Ruta | Acceso | Descripción |
|--------|------|--------|-------------|
| POST | /api/auth/register | Público | Registrar un usuario |
| POST | /api/auth/login | Público | Iniciar sesión |
| GET | /api/auth/me | Privado | Ver mi perfil |
| PUT | /api/auth/me | Privado | Editar mi perfil (nombre, teléfono, dirección) |
| GET | /api/products | Público | Obtener todos los productos |
| GET | /api/products/:id | Público | Obtener un producto |
| POST | /api/products | Admin | Crear un producto |
| PUT | /api/products/:id | Admin | Actualizar un producto |
| DELETE | /api/products/:id | Admin | Eliminar un producto |
| GET | /api/users | Admin | Obtener todos los usuarios |
| GET | /api/users/:id | Admin | Obtener un usuario |
| PUT | /api/users/:id | Admin | Actualizar un usuario |
| DELETE | /api/users/:id | Admin | Eliminar un usuario |
| GET | /api/orders | Admin | Obtener todos los pedidos |
| GET | /api/orders/:id | Privado | Obtener un pedido |
| POST | /api/orders | Público | Crear un pedido (invitado o con cuenta) |
| PUT | /api/orders/:id | Admin | Actualizar un pedido |
| DELETE | /api/orders/:id | Admin | Eliminar un pedido |
| POST | /api/distributors | Público | Enviar solicitud para ser distribuidor |
| GET | /api/distributors | Admin | Ver todas las solicitudes recibidas |

## Estado del proyecto

Finalizado — entrega del 27 de julio de 2026.

## Contacto

Engelberth Pico — engelberthyam@gmail.com
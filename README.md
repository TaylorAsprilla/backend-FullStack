# Backend curso FullStack

Este proyecto constituye la implementación del backend para un curso FullStack. Proporciona una estructura base y funcionalidades esenciales para el desarrollo de aplicaciones web FullStack.

## Requisitos Previos

Asegúrate de tener instalados los siguientes elementos:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Instalación

1. Clona el repositorio: `git clone https://github.com/TaylorAsprilla/backend-FullStack.git`
2. Ingresa al directorio: `cd backend`
3. Instala las dependencias: `npm install`

## Configuración

1. Crea un archivo de configuración `.env` según los requerimientos.
2. Agrega las configuraciones necesarias como las credenciales de la base de datos y cualquier otra información sensible.

## Uso

Ejecuta el proyecto con el siguiente comando:

```bash
build:dev
start:dev
```
El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

Describe la estructura de directorios del proyecto y la funcionalidad de cada uno.



- **src/:** Contiene los principales archivos fuente del proyecto.
  - **controllers/:** Controladores que manejan la lógica de negocio.
  - **database/:** Módulos que gestionan la conexión y configuración de la base de datos.
  - **helpers/:** Utilidades y funciones auxiliares.
  - **interfaces/:** Definiciones de interfaces TypeScript.
  - **middlewares/:** Funciones middleware para procesar las solicitudes HTTP.
  - **models/:** Modelos que definen la estructura de la base de datos.
  - **routes/:** Rutas que gestionan las peticiones HTTP.
  - **server.ts:** Archivo que inicia el servidor y configura la aplicación.

- **app.ts:** Archivo principal de la aplicación.
- **.env:** Archivo de configuración que almacena variables de entorno.
- **package.json:** Archivo de configuración de Node.js que describe el proyecto y sus dependencias.
- **README.md:** Documentación principal del proyecto.






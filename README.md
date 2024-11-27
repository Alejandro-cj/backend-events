
# Backend de Manejo de Eventos con Nest.js

Este proyecto fue desarrollado por **[Tu Nombre]** como parte de una práctica de desarrollo backend utilizando el framework **Nest.js** y **TypeORM**. El sistema permite gestionar usuarios, eventos, comentarios y categorías, con relaciones complejas entre estas entidades.

## 🚀 Funcionalidades Principales

- **Usuarios**:
  - Crear, obtener, actualizar y eliminar usuarios.
  - Consultar los eventos a los que asiste un usuario.
- **Eventos**:
  - Crear, obtener, actualizar y eliminar eventos.
  - Consultar detalles de un evento, incluyendo asistentes, comentarios y categorías.
- **Comentarios**:
  - Crear, actualizar y eliminar comentarios asociados a eventos y usuarios.
- **Categorías**:
  - Crear, obtener y actualizar categorías.
  - Asociar eventos a múltiples categorías.

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- MySQL (base de datos configurada)
- Nest CLI (opcional para comandos de desarrollo)

## 🔧 Instalación y Configuración

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd backend-events
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar las variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```plaintext
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=nest_events
   ```

4. **Iniciar la aplicación**:
   ```bash
   npm run start
   ```

## 📚 Documentación de Rutas

### Usuarios
- **POST /users**: Crear un nuevo usuario.
- **GET /users/:id**: Obtener información de un usuario por ID.
- **GET /users/:id/events**: Obtener eventos asociados a un usuario.
- **PATCH /users/:id**: Actualizar información de un usuario.
- **DELETE /users/:id**: Eliminar un usuario.

### Eventos
- **POST /events**: Crear un nuevo evento.
- **GET /events/:id**: Obtener información de un evento por ID.
- **GET /events/:id/details**: Obtener detalles de un evento (asistentes, categorías, comentarios).
- **PATCH /events/:id**: Actualizar un evento.
- **DELETE /events/:id**: Eliminar un evento.

### Comentarios
- **POST /comments**: Crear un comentario.
- **PATCH /comments/:id**: Actualizar un comentario.
- **DELETE /comments/:id**: Eliminar un comentario.

### Categorías
- **POST /categories**: Crear una nueva categoría.
- **GET /categories**: Obtener todas las categorías.
- **PATCH /categories/:id**: Actualizar una categoría.

## 🛠 Tecnologías Utilizadas

- **Nest.js**: Framework para aplicaciones Node.js.
- **TypeORM**: ORM para gestionar las entidades y relaciones con MySQL.
- **MySQL**: Base de datos relacional.
- **Class-validator**: Validaciones de entrada de datos.

## ✨ Autor

**[Alejandro Cogollo Julio]**  
Proyecto desarrollado como práctica de **Electiva Libre I**.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
```

---


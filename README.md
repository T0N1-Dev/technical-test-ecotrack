# 🌐 Proyecto Sitio Web con React + SCSS

## 🛠️ Nombre del Proyecto: EcoTrack

### 📄 Descripción General

EcoTrack es una plataforma ficticia de video streaming orientada a promover contenido y estilo de vida sostenibles. 
El proyecto consiste en un mini sitio web completamente funcional desarrollado con React, React Router y SCSS Modules. 
Incluye cuatro páginas principales: Inicio, Sobre Nosotros, Contacto y Datos. 
El diseño es completamente responsivo y está pensado con buenas prácticas de UI/UX modernas.

---

## 📌 Páginas Implementadas

### 1. Inicio
- ✅ Sección principal con titular atractivo y botón de llamada a la acción (CTA).
- ✅ Animaciones suaves de entrada utilizando `@keyframes` en SCSS.

### 2. Sobre Nosotros
- ✅ Descripción detallada de la misión de EcoTrack.
- ✅ Maquetado en cuadrícula con características como:
  - 🌱 Contenido ecológico
  - 💡 Streaming de bajo consumo de datos
  - 🌍 Programas de compensación de carbono

### 3. Contacto
- ✅ Formulario con campos: Nombre, Correo electrónico, Mensaje
- ✅ Validación básica
- ✅ Diseño adaptable con flexbox

### 4. Datos
- ✅ Obtiene datos desde la API de JSONPlaceholder
- ✅ Muestra una lista de usuarios usando el componente reutilizable `UserCard`
- ✅ Manejo de estados de carga y error mediante renderizado condicional

---

## 🎯 Funcionalidades Clave

### ⚛️ React
- Componentes funcionales y uso de Hooks
- Props y gestión de estado
- Navegación con React Router
- Enlaces activos resaltados

### 🎨 SCSS
- Estructura modular con SCSS Modules
- Reglas anidadas, uso de variables
- Maquetación con grid y flexbox
- Media queries para diseño responsive

### 🧩 Reutilización de Componentes
- `UserCard` para mostrar usuarios
- Componentes comunes como `Button`, `Navbar` y `FormInput` usados en varias páginas

### 🌐 Consumo de API
- Se conecta a: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- Indicadores visuales de carga y errores

---

## ✨ Funcionalidades Extra

- 🌗 Selector de tema (claro/oscuro) usando Context API.
- 🎞️ Animaciones sutiles con SCSS
- ✅ Tests básicos (con Jest y React Testing Library)

---

## 📊 Cómo Ejecutar el Proyecto

```bash
git clone https://github.com/T0N1-Dev/technical-test-ecotrack.git
cd ecostream-mini-site
npm install
npm run dev
```

---

## 🖼️ Capturas y Demo

- 👉 [View Demo](https://technical-test-ecotrack.vercel.app/)
- 🖼️ ![Main Page](https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1746643389/EcoTrack_amilce.png)
- 🖼️ ![Data](https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1746644477/Data_w3awj1.png)

---


## ✅ Conclusión

Este proyecto demuestra el dominio de tecnologías como React y SCSS, integrando diseño moderno, manejo de APIs, 
diseño responsivo y componentes reutilizables. 
Además, se añaden elementos creativos como animaciones y selector de tema para enriquecer la experiencia de usuario.


# API Gateway with MicroServices 🚪🛡️

API Gateway construido con **NestJS** ⚡ para gestionar productos 📦 en un sistema de microservicios.


- Permite operaciones CRUD ✏️
- Permite paginación comunicándose con el microservicio de productos 🔄

## Índice

- [Características principales](#características-principales-)
- [Estructura del proyecto](#estructura-del-proyecto-)
- [Variables de entorno](#variables-de-entorno-)
- [Ejecución](#ejecución-)

## Características principales ✨

- **Microservicios** 🧩
  - Comunicación con micro servicio usando `@nestjs/microservices` 🔗
- **Validación y transformación** 🛠️
  - Con `class-validator` y `class-transformer` ✅
- **Manejo de excepciones RPC** ⚠️:
  - Filtro personalizado para transformar excepciones RPC en respuestas HTTP 🔄
- **Configuración de variables de entorno y servicios** ⚙️

## Estructura del proyecto 🗂️

- `src/` Código fuente principal
  - `app.module.ts`, `main.ts`: Módulo raíz y punto de entrada 🚀
  - `common/`: DTOs y filtros de excepciones reutilizables ♻️
  - `config/`: Manejo de variables de entorno y constantes de servicios 🔑
  - `products/`: Controlador y módulo para la gestión de productos 📦
- `test/`: Pruebas end-to-end 🧪

## Variables de entorno 🌱

Configura el archivo `.env` basado en `.env.template` para definir:

- `PORT`: Puerto del gateway 🚪
- `PRODUCTS_MICROSERVICE_HOST`: Host del microservicio de productos 🏠
- `PRODUCTS_MICROSERVICE_PORT`: Puerto del microservicio de productos 🚪

## Ejecución ▶️

1. Copia `.env.template` a `.env` y ajusta los valores.
2. Instala dependencias:
   ```zsh
   npm install
   ```
3. Inicia el gateway:
   ```zsh
   npm run start:dev
   ```
4. Corre las pruebas:
   ```zsh
   npm run test:e2e
   ```

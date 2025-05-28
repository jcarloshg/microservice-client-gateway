# API Gateway with MicroServices 🚪🛡️

Api Gateway built with **NestJS** to manage products 📦 in a microservice system products.

- Allows you to manage products using CRUD operations. ✏️
- Allows product pagination through microservices product communication. 🔄

## Index

- [Main features ✨](#main-features-)
- [Project's structure 🗂️](#projects-structure-)
- [Environment Variables 🌱](#environment-variables-)
- [Execute ▶️](#execute-)

## Main features ✨

- **Microservicios** 🧩
  - Communication with microservices using `@nestjs/microservices` 🔗
- **Validación y transformación** 🛠️
  - With `class-validator` y `class-transformer` ✅
- **Manejo de excepciones RPC** ⚠️:
  - Custom filtering of error/exceptions responses with RCP in HTTP responses. 🔄
- **Configuración de variables de entorno y servicios** ⚙️

## Project's structure 🗂️

- `src/` Main code
  - `app.module.ts`, `main.ts`: Root module and entry point. 🚀
  - `common/`: Reusable DTO and reusable exception filters. ♻️
  - `config/`: Manage of environment variables and constant of services. 🔑
  - `products/`: Controller and module to the manage of products. 📦

## Environment Variables 🌱

Configure the file `.env` based in `.env.template` to define:

- `PORT`: Port of gateway 🚪
- `PRODUCTS_MICROSERVICE_HOST`: Host of product microservice. 🏠
- `PRODUCTS_MICROSERVICE_PORT`: Port of product microservice. 🚪

## Execute ▶️

1. Copy `.env.template` in `.env` and set the values
2. Install dependencies
   ```zsh
   npm install
   ```
3. Run the gateway:
   ```zsh
   npm run start:dev
   ```

# API Gateway for Microservices 🚪🛡️

This project is an **API Gateway** developed with **NestJS** that centralizes and manages communication between product 📦 and order 🧾 microservices.

## Index

- [The microservices to connect 🔗](#the-microservices-to-connect)
- [Main features ✨](#main-features-)
- [Project's structure 🗂️](#projects-structure-)
- [Environment Variables 🌱](#environment-variables-)
- [Execute ▶️](#execute-)

## The microservices to connect 🔗

- [Microservice of products 📦](https://github.com/jcarloshg/microservices_products)
- [Microservice of orders 🧾](https://github.com/jcarloshg/microservices_orders)

## Main features ✨

- **Microservices Integration** 🧩  
  Communicates with microservices using `@nestjs/microservices` 🔗

- **REST API Endpoints** 🌐  
  Provides unified HTTP endpoints for clients to interact with product 📦 and order 🧾 services.

- **Orchestration** 🎼  
  Orchestrates product 📦 and order 🧾 microservices using `TCP` communication 🔌

- **Validation & Transformation** 🛠️  
  Ensures data integrity with `class-validator` 🧪 and `class-transformer` 🔄

- **RPC Exception Handling** ⚠️  
  Custom filtering of error/exception responses with RPC in HTTP responses 🚨

- **Environment & Service Configuration** ⚙️  
  Manages environment variables and service constants 🔑

- **Pagination Support** 📄  
  Enables clients to retrieve data in manageable chunks for better performance and scalability 🚀

## Project's structure 🗂️

- `src/` Main code
  - `app.module.ts`, `main.ts`: Root module and entry point. 🚀
  - `common/`: Reusable DTOs and custom exception filters. ♻️
    - `dto/`: Common DTO definitions (e.g., pagination).
    - `exceptions/`: Custom filters for RPC exceptions.
  - `config/`: Environment variable and service constant management. 🔑
    - `envs.ts`, `services.ts`, `index.ts`: Configuration utilities.
  - `products/`: Controller, module, and DTOs for product management. 📦
    - `products.controller.ts`, `products.module.ts`, `dto/`
  - `orders/`: Controller, module, and DTOs for order management. 🧾
    - `orders.controller.ts`, `orders.module.ts`, `dto/`
- `test/`: End-to-end tests.
- `DOCS/`: Endpoint and resource documentation.

## Environment Variables 🌱

Configura el archivo `.env` basado en `.env.template` para definir:

- `PORT`: Puerto del gateway 🚪
- `PRODUCTS_MICROSERVICE_HOST`: Host del microservicio de productos 🏠
- `PRODUCTS_MICROSERVICE_PORT`: Puerto del microservicio de productos 🚪
- `ORDERS_MICROSERVICE_HOST`: Host del microservicio de órdenes 🏠
- `ORDERS_MICROSERVICE_PORT`: Puerto del microservicio de órdenes 🚪

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
4. Import the [endpoint](DOCS/endpoints.json) to `Postman`

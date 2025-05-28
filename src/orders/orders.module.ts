import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule } from '@nestjs/microservices';
import { envs, ORDER_SERVICE } from 'src/config';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        options: {
          url: envs.ORDERS_MICROSERVICE_HOST,
          port: envs.ORDERS_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class OrdersModule {}

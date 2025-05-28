import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Inject,
  Query,
  Patch,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ORDER_SERVICE } from 'src/config';
import {
  CreateOrderDto,
  OrderPaginationDto,
  UpdateOrderStatusDto,
} from './dto';
import { catchError } from 'rxjs';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(ORDER_SERVICE) private readonly ordersClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersClient.send({ cmd: 'createOrder' }, createOrderDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersClient.send({ cmd: 'findOrder' }, { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Get()
  findPagination(@Query() orderPaginationDto: OrderPaginationDto) {
    return this.ordersClient.send(
      { cmd: 'findByPagination' },
      orderPaginationDto,
    );
  }

  @Patch(':id')
  changeOrderStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateOrderDto: UpdateOrderStatusDto,
  ) {
    return this.ordersClient
      .send(
        { cmd: 'changeOrderStatus' },
        {
          id,
          ...updateOrderDto,
        },
      )
      .pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }
}

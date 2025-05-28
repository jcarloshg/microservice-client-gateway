import { IsEnum, IsOptional, IsPositive } from 'class-validator';
import { OrderStatus, OrderStatusList } from './create-order.dto';
import { Type } from 'class-transformer';

export class OrderPaginationDto {
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit?: number = 10;

  @IsEnum(OrderStatusList, {
    message: `Status must be one of the following: [${OrderStatusList.join(', ')}]`,
  })
  @IsOptional()
  public status: OrderStatus;
}

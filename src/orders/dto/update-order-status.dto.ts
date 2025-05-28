import { OrderStatus, OrderStatusList } from './create-order.dto';
import { IsEnum } from 'class-validator';

export class UpdateOrderStatusDto {
  @IsEnum(OrderStatusList, {
    message: `[status] must be one of the following: [${OrderStatusList.join(', ')}]`,
  })
  public status: OrderStatus;
}

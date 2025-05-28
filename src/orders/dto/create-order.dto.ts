import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export enum OrderStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}
export const OrderStatusList = Object.values(OrderStatus);

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  public totalAmount: number;

  @IsNumber()
  @IsPositive()
  public totalItems: number;

  @IsEnum(OrderStatusList, {
    message: `Status must be one of the following: [${OrderStatusList.join(', ')}]`,
  })
  @IsOptional()
  public status: OrderStatus = OrderStatus.PENDING;

  @IsBoolean()
  @IsOptional()
  public paid: boolean = false;
}

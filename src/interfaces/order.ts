export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

export interface Order {
  status: OrderStatus
}

export const OrderStatusColors: { [key in OrderStatus]: string } = {
  [OrderStatus.PENDING]: '#FFD700',
  [OrderStatus.PROCESSING]: '#FFA500',
  [OrderStatus.SHIPPED]: '#1E90FF',
  [OrderStatus.DELIVERED]: '#32CD32',
  [OrderStatus.CANCELLED]: '#FF0000'
}

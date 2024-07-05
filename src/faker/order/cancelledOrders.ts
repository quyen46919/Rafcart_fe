import { OrderStatus, OrderStatusColors } from '@/interfaces/order.ts'

const cancelledOrderList = [
  {
    orderId: '23E34RT3',
    url: '/details/tv',
    purchased: '01 March 2021',
    status: OrderStatus.CANCELLED,
    variants: [
      {
        color: 'gray',
        size: 'N/A',
        price: 60.55,
        quantity: 1,
        imageUrl:
          'https://www.easypages.url.tw/w3layouts020/assets/images/tv.png',
      },
      {
        color: 'black',
        price: 55.55,
        size: 'N/A',
        quantity: 3,
        imageUrl:
          'https://www.easypages.url.tw/w3layouts020/assets/images/tv.png',
      },
    ],
  },
  {
    orderId: '23E34RT3',
    url: '/details/tv',
    purchased: '01 March 2021',
    status: OrderStatus.CANCELLED,
    variants: [
      {
        color: 'gray',
        size: 'N/A',
        price: 60.55,
        quantity: 1,
        imageUrl:
          'https://www.easypages.url.tw/w3layouts020/assets/images/tv.png',
      },
      {
        color: 'black',
        price: 55.55,
        size: 'N/A',
        quantity: 3,
        imageUrl:
          'https://www.easypages.url.tw/w3layouts020/assets/images/tv.png',
      },
    ],
  },
  {
    orderId: '23E34RT3',
    url: '/details/tv',
    purchased: '01 March 2021',
    status: OrderStatus.CANCELLED,
    variants: [
      {
        color: 'gray',
        size: 'N/A',
        price: 60.55,
        quantity: 1,
        imageUrl:
          'https://www.easypages.url.tw/w3layouts020/assets/images/tv.png',
      },
      {
        color: 'black',
        price: 55.55,
        size: 'N/A',
        quantity: 3,
        imageUrl:
          'https://www.easypages.url.tw/w3layouts020/assets/images/tv.png',
      },
    ]
  }
]

export default cancelledOrderList
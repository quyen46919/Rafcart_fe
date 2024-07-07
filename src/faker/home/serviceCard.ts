import deliverVan from '@/assets/images/icons/delivery-van.svg'
import moneyBack from '@/assets/images/icons/money-back.svg'
import serviceHours from '@/assets/images/icons/service-hours.svg'
import { ServiceCardProps } from '@/interfaces'

export const serviceCards: ServiceCardProps[] = [
  {
    image: deliverVan,
    title: 'Free Shipping',
    description: 'Order over $200'
  },
  {
    image: moneyBack,
    title: 'Money Returns',
    description: '30 Days money return'
  },
  {
    image: serviceHours,
    title: '24/7 Support',
    description: 'Customer support'
  }
]

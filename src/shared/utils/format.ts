import moment from 'moment'
import { DateFormat } from '../enum/format'

export const formattedDate = (expiresDate: string) => {
  const parsedDate = moment(expiresDate, DateFormat.DDMMYYYY)
  const formattedDate = parsedDate.format(DateFormat.MMYY)
  return formattedDate
}

export const formatPrice = (number: number) => {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

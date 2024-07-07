import CardProps from './card'
type TagStatus = {
  HOT: 'hot'
}
export interface VerticalProductCardProp extends CardProps {
  tag?: number | TagStatus
  isWishlist?: boolean
  href: string
  onAddToCart: () => void
  onViewDetail: () => void
  onWishlist: () => void
}

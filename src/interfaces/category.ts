export interface CategoryProps {
  id: string
  name: string
  slug: string
  icon_url?: string
  thumbnail_url: string
  subcategories?: CategoryProps[]
}

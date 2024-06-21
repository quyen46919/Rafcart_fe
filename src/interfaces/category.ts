interface Category {
  id: string
  name: string
  slug: string
  icon_url?: string
  subcategories?: Category[]
}

export default Category

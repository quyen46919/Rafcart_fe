import { VerticalProductCardProp } from '@/interfaces'

export const recommends: VerticalProductCardProp[] = [
  {
    tag: 10,
    thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/product1.jpg',
    name: 'MADELINE sofa',
    description: 'Fabric Sofa Bed',
    price: 120,
    isWishlist: false,
    href: '#',
    comments: [
      {
        id: 1,
        parent_id: null,
        comment: 'ADELINE sofaADELINE sofaADELINE sofaADELINE sofaADELINE sofaADELINE sofa',
        rating: 4,
        updated_at: 'today'
      }
    ],
    onAddToCart: () => alert('add to cart'),
    onViewDetail: () => alert('view detail'),
    onWishlist: () => alert('handle wishlist')
  },
  // Tạo thêm 5 phần tử tương tự với các giá trị khác nhau
  {
    tag: 20,
    thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/product2.jpg',
    name: 'ELLA chair',
    description: 'Comfortable Chair',
    price: 80,
    isWishlist: false,
    href: '#',
    comments: [
      {
        id: 2,
        parent_id: null,
        comment: 'ELLA chair is great for reading',
        rating: 5,
        updated_at: 'today'
      }
    ],
    onAddToCart: () => alert('add to cart'),
    onViewDetail: () => alert('view detail'),
    onWishlist: () => alert('handle wishlist')
  },
  {
    tag: 10,
    thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/product1.jpg',
    name: 'MADELINE sofa',
    description: 'Fabric Sofa Bed',
    price: 120,
    isWishlist: false,
    href: '#',
    comments: [
      {
        id: 1,
        parent_id: null,
        comment: 'ADELINE sofaADELINE sofaADELINE sofaADELINE sofaADELINE sofaADELINE sofa',
        rating: 4,
        updated_at: 'today'
      }
    ],
    onAddToCart: () => alert('add to cart'),
    onViewDetail: () => alert('view detail'),
    onWishlist: () => alert('handle wishlist')
  },
  {
    tag: 20,
    thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/product2.jpg',
    name: 'ELLA chair',
    description: 'Comfortable Chair',
    price: 80,
    isWishlist: false,
    href: '#',
    comments: [
      {
        id: 2,
        parent_id: null,
        comment: 'ELLA chair is great for reading',
        rating: 5,
        updated_at: 'today'
      }
    ],
    onAddToCart: () => alert('add to cart'),
    onViewDetail: () => alert('view detail'),
    onWishlist: () => alert('handle wishlist')
  },
  {
    tag: 30,
    thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/product3.jpg',
    name: 'LUCAS table',
    description: 'Dining Table',
    price: 200,
    isWishlist: false,
    href: '#',
    comments: [
      {
        id: 3,
        parent_id: null,
        comment: 'LUCAS table is perfect for dinner',
        rating: 5,
        updated_at: 'today'
      }
    ],
    onAddToCart: () => alert('add to cart'),
    onViewDetail: () => alert('view detail'),
    onWishlist: () => alert('handle wishlist')
  },
  {
    tag: 40,
    thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/product4.jpg',
    name: 'HANNAH bed',
    description: 'King Size Bed',
    price: 300,
    isWishlist: false,
    href: '#',
    comments: [
      {
        id: 4,
        parent_id: null,
        comment: 'HANNAH bed is very comfortable',
        rating: 5,
        updated_at: 'today'
      }
    ],
    onAddToCart: () => alert('add to cart'),
    onViewDetail: () => alert('view detail'),
    onWishlist: () => alert('handle wishlist')
  },
  {
    tag: 50,
    thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/product5.jpg',
    name: 'JACKSON desk',
    description: 'Office Desk',
    price: 150,
    isWishlist: false,
    href: '#',
    comments: [
      {
        id: 5,
        parent_id: null,
        comment: 'JACKSON desk is ideal for work',
        rating: 4,
        updated_at: 'today'
      }
    ],
    onAddToCart: () => alert('add to cart'),
    onViewDetail: () => alert('view detail'),
    onWishlist: () => alert('handle wishlist')
  },
  {
    tag: 60,
    thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/product6.jpg',
    name: 'VICTORIA wardrobe',
    description: 'Spacious Wardrobe',
    price: 250,
    isWishlist: false,
    href: '#',
    comments: [
      {
        id: 6,
        parent_id: null,
        comment: 'VICTORIA wardrobe has a lot of space',
        rating: 4,
        updated_at: 'today'
      }
    ],
    onAddToCart: () => alert('add to cart'),
    onViewDetail: () => alert('view detail'),
    onWishlist: () => alert('handle wishlist')
  }
]

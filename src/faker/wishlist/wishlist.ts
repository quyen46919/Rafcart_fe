import CardProps from '@/interfaces/card'
import thubmnail1 from '@/assets/images/products/product1.jpg'
import thubmnail2 from '@/assets/images/products/product2.jpg'
import thubmnail3 from '@/assets/images/products/product3.jpg'
import thubmnail4 from '@/assets/images/products/product4.jpg'
import thubmnail5 from '@/assets/images/products/product5.jpg'
import thubmnail6 from '@/assets/images/products/product6.jpg'
import thubmnail7 from '@/assets/images/products/product7.jpg'

const cards: Partial<CardProps>[] = [
  {
    id: 4,
    slug: '/',
    name: `Sofa ABC XYZ javascript:&apos;<svg onload&equals;alert&lpar;1&rpar;&nvgt;&apos;" Very long name that goes on and on and never stops because it is supposed to be extremely lengthy and just keep going with a lot of words and more words and even more words to test the limits of the system and ensure that everything works correctly despite the ridiculously long name being used here`,
    price: 0.1,
    discount: 34,
    amount: 188,
    thumbnail: '</div><img src=x onerror=alert(1)//',
    imageList: ['<img src=x onerror=alert("HEHEHE")>', thubmnail1, thubmnail2],
    comments: [
      {
        id: 1,
        parent_id: 0,
        comment:
          '<script>alert("HEHEHE")</script> This is a very long comment that keeps going and going to see how the system handles really lengthy text inputs that just do not seem to end at all because they keep going on and on with more and more words being added constantly to make it excessively long.',
        rating: 4,
        updated_at: '2024-01-01T12:00:00Z'
      },
      {
        id: 2,
        parent_id: 1,
        comment: 'Very comfortable. <img src=x onerror=alert("HEHEHE")>',
        rating: 5,
        updated_at: '2024-01-02T12:00:00Z'
      },
      {
        id: 3,
        parent_id: 1,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <script>alert("HEHEHE")</script> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 3,
        updated_at: '2024-01-03T12:00:00Z'
      }
    ],
    category_id: {
      id: '4',
      name: 'Outdoor <img src=x onerror=alert("HEHEHE")>',
      slug: 'outdoor',
      icon_url: ''
    }
  },
  {
    id: 5,
    slug: `.`,
    name: `Chair DEF UVW &lt🤓🤓🤓🤓🤓🤓`,
    price: 350,
    discount: -20,
    amount: 99,
    thumbnail: 'https://i.gifer.com/XOsX.gif',
    imageList: [thubmnail1, thubmnail2],
    comments: [
      {
        id: 4,
        parent_id: 0,
        comment: 'Sturdy table. <script>alert("HEHEHE")</script>',
        rating: 5,
        updated_at: '2024-01-04T12:00:00Z'
      },
      {
        id: 5,
        parent_id: 4,
        comment: 'Too expensive. <img src=x onerror=alert("HEHEHE")>',
        rating: 2,
        updated_at: '2024-01-05T12:00:00Z'
      }
    ],
    category_id: {
      id: '5',
      name: 'Indoor <script>alert("HEHEHE")</script>',
      slug: 'indoor',
      icon_url: ''
    }
  },
  {
    id: 6,
    slug: `/////////////////////fkshfkjgkfhjgk`,
    name: 'Table GHI JKL <img src=x onerror=alert("HEHEHE")>',
    price: NaN, // Missing price
    discount: 15,
    amount: 100,
    thumbnail: thubmnail2,
    imageList: [thubmnail3, thubmnail4, thubmnail5],
    comments: [
      {
        id: 6,
        parent_id: 0,
        comment: 'Looks great in my dining room! <script>alert("HEHEHE")</script>',
        rating: 4,
        updated_at: '2024-01-06T12:00:00Z'
      },
      {
        id: 7,
        parent_id: 6,
        comment: 'The assembly was a bit tricky. <img src=x onerror=alert("HEHEHE")>',
        rating: 3,
        updated_at: '2024-01-07T12:00:00Z'
      }
    ],
    category_id: {
      id: '6',
      name: 'Furniture <script>alert("HEHEHE")</script>',
      slug: 'furniture',
      icon_url: ''
    }
  },
  {
    id: 7,
    name: 'Lamp MNO PQR <script>alert("HEHEHE")</script>',
    price: 0, // Invalid price
    discount: 1000, // Invalid discount
    amount: 300,
    thumbnail: 'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg',
    imageList: [thubmnail6, thubmnail7],
    comments: [
      {
        id: 8,
        parent_id: 0,
        comment: 'Bright and stylish. <script>alert("HEHEHE")</script>',
        rating: 5,
        updated_at: '2024-01-08T12:00:00Z'
      },
      {
        id: 9,
        parent_id: 8,
        comment: 'Too bright for my taste. <img src=x onerror=alert("HEHEHE")>',
        rating: 3,
        updated_at: '2024-01-09T12:00:00Z'
      }
    ],
    category_id: {
      id: '7',
      name: 'Lighting <img src=x onerror=alert("HEHEHE")>',
      slug: 'lighting',
      icon_url: ''
    }
  },
  {
    id: 8,
    slug: `/src/assets/images/placeholder`,
    name: "&quot; onclick=&quot;alert('hi')",
    price: 9999, // Invalid price
    discount: 25,
    amount: 150,
    thumbnail: '🤓',
    imageList: [thubmnail1, thubmnail2, thubmnail3, thubmnail4],
    comments: [
      {
        id: 10,
        parent_id: 0,
        comment: 'Spacious and well-built. <script>alert("HEHEHE")</script>',
        rating: 5,
        updated_at: '2024-01-10T12:00:00Z'
      },
      {
        id: 11,
        parent_id: 10,
        comment: 'Doors are a bit flimsy. <img src=x onerror=alert("HEHEHE")>',
        rating: 3,
        updated_at: '2024-01-11T12:00:00Z'
      },
      {
        id: 12,
        parent_id: 10,
        comment: 'Great value for money. <script>alert("HEHEHE")</script>',
        rating: -0.4,
        updated_at: '2024-01-12T12:00:00Z'
      }
    ],
    category_id: {
      id: '8',
      name: 'Storage <script>alert("HEHEHE")</script>',
      slug: 'storage',
      icon_url: ''
    }
  },
  {
    id: 9,
    slug: 'product-9',
    name: 'Shelf YZ AB <img src=x onerror=alert("HEHEHE")>',
    price: 200,
    discount: 300,
    amount: Math.E,
    thumbnail: thubmnail5,
    imageList: [thubmnail5, thubmnail6, thubmnail7],
    comments: [
      {
        id: 13,
        parent_id: 0,
        comment: 'Very useful. <script>alert("HEHEHE")</script>',
        rating: 4,
        updated_at: '2024-01-13T12:00:00Z'
      },
      {
        id: 14,
        parent_id: 13,
        comment: 'Poor quality. <img src=x onerror=alert("HEHEHE")>',
        rating: 2,
        updated_at: '2024-01-14T12:00:00Z'
      },
      {
        id: 15,
        parent_id: 13,
        comment: 'Easy to assemble. <script>alert("HEHEHE")</script>',
        rating: -15,
        updated_at: '2024-01-15T12:00:00Z'
      }
    ],
    category_id: {
      id: '9',
      name: 'Decor <script>alert("HEHEHE")</script>',
      slug: 'decor',
      icon_url: ''
    }
  }
]

export default cards

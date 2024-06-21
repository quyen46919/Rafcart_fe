import Category from '@/interfaces/category'

const categories: Category[] = [
  {
    id: '1',
    slug: 'shoes',
    name: 'Shoes',
    icon_url:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#FD3D57" d="M10 3C7.805 3 6.203 4.605 5.281 6.5C4.36 8.395 3.961 10.68 4 12.688c.047 2.332 1.063 4.687 1.063 4.687l.28.625h8.407l.219-.75s.789-2.941 1-5.75c.082-1.105.047-3.027-.563-4.844c-.304-.91-.746-1.8-1.469-2.5C12.216 3.457 11.188 3 10 3m12 0c-1.188 0-2.215.457-2.938 1.156c-.722.7-1.164 1.59-1.468 2.5c-.61 1.817-.645 3.739-.563 4.844c.211 2.809 1 5.75 1 5.75l.219.75h8.406l.282-.625S27.953 15.02 28 12.687c.04-2.007-.36-4.292-1.281-6.187C25.797 4.605 24.195 3 22 3M10 5c.703 0 1.129.203 1.531.594c.403.39.762 1.011 1 1.718c.473 1.415.531 3.215.469 4.063c-.164 2.176-.684 3.996-.844 4.625H6.72c-.242-.684-.692-2.016-.719-3.344c-.035-1.695.355-3.761 1.094-5.281C7.832 5.855 8.77 5 10 5m12 0c1.23 0 2.168.855 2.906 2.375c.739 1.52 1.125 3.586 1.094 5.281c-.027 1.328-.477 2.66-.719 3.344h-5.437c-.16-.629-.68-2.45-.844-4.625c-.063-.848-.004-2.648.469-4.063c.238-.707.597-1.328 1-1.718C20.87 5.204 21.297 5 22 5M5 21v1c-.012 1.379.121 2.988.813 4.406C6.502 27.824 7.957 29 10 29c2.262 0 3.98-2.215 4-5c.004-.645-.023-1.402-.25-2.25l-.188-.75zm13.438 0l-.188.75c-.227.848-.254 1.605-.25 2.25c.02 2.785 1.738 5 4 5c2.043 0 3.496-1.176 4.188-2.594c.69-1.418.824-3.027.812-4.406v-1zM7.155 23h4.75c.035.328.098.664.094 1c-.016 2.023-1.07 3-2 3c-1.379 0-1.95-.535-2.406-1.469c-.328-.668-.367-1.629-.438-2.531m12.938 0h4.75c-.07.902-.11 1.863-.438 2.531C23.95 26.465 23.38 27 22 27c-.93 0-1.984-.977-2-3c-.004-.336.059-.672.094-1z"/></svg>',
    subcategories: []
  },
  {
    id: '2',
    slug: 'men',
    name: 'Men',
    icon_url:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#FD3D57" d="M16 2c-2.2 0-4 1.8-4 4a3.96 3.96 0 0 0 1.125 2.75C11.273 9.773 10 11.746 10 14v5.406l.281.313L12 21.437V30h2v-9.406l-.281-.313L12 18.563V14c0-2.219 1.781-4 4-4c2.219 0 4 1.781 4 4v4.563l-1.719 1.718l-.281.313V30h2v-8.563l1.719-1.718l.281-.313V14c0-2.254-1.273-4.227-3.125-5.25A3.958 3.958 0 0 0 20 6c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"/></svg>',
    subcategories: [
      {
        id: '2-1',
        slug: 'hot-sale',
        name: 'Hot sale',
        subcategories: [
          { id: '2-1-1', slug: 'hoodies-sweatshirts', name: 'Hoodies & Sweatshirts' },
          { id: '2-1-2', slug: 't-shirt', name: 'T-shirt' },
          { id: '2-1-3', slug: 'mens-sets', name: "Men's Sets" },
          { id: '2-1-4', slug: 'jacket', name: 'Jacket' },
          { id: '2-1-5', slug: 'shoes', name: 'Shoes' }
        ]
      },
      {
        id: '2-2',
        slug: 'bottoms',
        name: 'Bottoms',
        subcategories: [
          { id: '2-2-1', slug: 'casual-pants', name: 'Casual Pants' },
          { id: '2-2-2', slug: 'mens-sleep-lounge', name: "Men's Sleep & Lounge" },
          { id: '2-2-3', slug: 'jeans', name: 'Jeans' },
          { id: '2-2-4', slug: 'shorts', name: 'Shorts' },
          { id: '2-2-5', slug: 'towel', name: 'Towel' }
        ]
      },
      {
        id: '2-3',
        slug: 'outerwear-jackets',
        name: 'Outerwear & Jackets',
        subcategories: [
          { id: '2-3-1', slug: 'jacket', name: 'Jacket' },
          { id: '2-3-2', slug: 'sweaters', name: 'Sweaters' },
          { id: '2-3-3', slug: 'casual-faux-leather', name: 'Casual Faux Leather' },
          { id: '2-3-4', slug: 'parks', name: 'Parks' },
          { id: '2-3-5', slug: 'jeans', name: 'Jeans' }
        ]
      },
      {
        id: '2-4',
        slug: 'accessories',
        name: 'Accessories',
        subcategories: [
          { id: '2-4-1', slug: 'scarves', name: 'Scarves' },
          { id: '2-4-2', slug: 'skullies-beanies', name: 'Skullies & Beanies' },
          { id: '2-4-3', slug: 'casual-faux-leather', name: 'Casual Faux Leather' },
          { id: '2-4-4', slug: 'prescription-glasses', name: 'Prescription Glasses' },
          { id: '2-4-5', slug: 'belt', name: 'Belt' }
        ]
      },
      {
        id: '2-5',
        slug: 'novelty-special',
        name: 'Novelty & Special',
        subcategories: [
          {
            id: '2-5-1',
            slug: 'cosplay-costumes',
            name: 'Cosplay Costumes'
          },
          {
            id: '2-5-2',
            slug: 'stage-dance-wear',
            name: 'Stage & Dance Wear'
          },
          {
            id: '2-5-3',
            slug: 'exotic-apparel',
            name: 'Exotic Apparel'
          },
          { id: '2-5-4', slug: 'scarves', name: 'Scarves' },
          { id: '2-5-5', slug: 'mens-sets', name: "Men's Sets" }
        ]
      },
      {
        id: '2-6',
        slug: 'underwear-loun',
        name: 'Underwear & Loun',
        subcategories: [
          { id: '2-6-1', slug: 'boxes', name: 'Boxes' },
          { id: '2-6-2', slug: 'briefs', name: 'Briefs' },
          { id: '2-6-3', slug: 'long-johns', name: 'Long Johns' },
          { id: '2-6-4', slug: 'mens-sleep-lounge', name: "Men's Sleep & Lounge" },
          { id: '2-6-5', slug: 'parks', name: 'Parks' }
        ]
      }
    ]
  },
  {
    id: '3',
    slug: 'women',
    name: 'Women',
    icon_url:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 14"><g fill="none" stroke="#FD3D57" stroke-linecap="round" stroke-linejoin="round"><path d="M7.02 4.652a1.886 1.886 0 1 0 0-3.773a1.886 1.886 0 0 0 0 3.773"/><path d="m8.743 10.75l-.43 2.14H5.726l-.431-2.14H3.906a.442.442 0 0 1-.428-.412a.298.298 0 0 1 .007-.09c.485-2.278.626-5.596 3.534-5.596s3.05 3.318 3.534 5.596a.3.3 0 0 1 .008.09a.442.442 0 0 1-.429.412z"/></g></svg>',
    subcategories: []
  },
  {
    id: '4',
    slug: 'electronics',
    name: 'Electronics',
    icon_url:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="#FD3D57" d="M240.49 63.51a12 12 0 0 0-17 0L192 95l-31-31l31.52-31.51a12 12 0 0 0-17-17L144 47l-23.51-23.49a12 12 0 1 0-17 17L107 44L56.89 94.14a44 44 0 0 0 0 62.23l12.88 12.88l-46.26 46.26a12 12 0 0 0 17 17l46.26-46.26l12.88 12.88a44 44 0 0 0 62.23 0L212 149l3.51 3.52a12 12 0 0 0 17-17L209 112l31.52-31.51a12 12 0 0 0-.03-16.98m-95.6 118.63a20 20 0 0 1-28.29 0L73.86 139.4a20 20 0 0 1 0-28.29L124 61l71 71Z"/></svg>',
    subcategories: []
  },
  {
    id: '5',
    slug: 'headphones',
    name: 'Headphones',
    icon_url:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none"><path stroke="#FD3D57" stroke-linecap="round" stroke-width="2" d="M21 15v-3a9 9 0 1 0-18 0v3"/><path fill="#FD3D57" d="M3 15v-1H2v1zm0 1h3v-2H3zm3 0v3h2v-3zm-2 3v-4H2v4zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm0-3h2a2 2 0 0 0-2-2zm15-1h1v-1h-1zm-3 1h3v-2h-3zm2-1v4h2v-4zm-2 4v-3h-2v3zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-2-5a2 2 0 0 0-2 2h2z"/></g></svg>',
    subcategories: []
  },
  {
    id: '6',
    slug: 'watches',
    name: 'Watches',
    icon_url:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="#FD3D57" d="M208 128a79.85 79.85 0 0 0-27.95-60.68L173 28.43A20 20 0 0 0 153.32 12h-50.64A20 20 0 0 0 83 28.43l-7 38.89a79.84 79.84 0 0 0 0 121.36l7 38.89A20 20 0 0 0 102.68 244h50.64A20 20 0 0 0 173 227.57l7.05-38.89A79.85 79.85 0 0 0 208 128M106 36h44l2.9 16a79.76 79.76 0 0 0-49.76 0Zm44 184h-44l-2.9-16a79.76 79.76 0 0 0 49.76 0Zm-22-36a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m40-56a12 12 0 0 1-12 12h-28a12 12 0 0 1-12-12v-28a12 12 0 0 1 24 0v16h16a12 12 0 0 1 12 12"/></svg>',
    subcategories: []
  },
  {
    id: '7',
    slug: 'computer',
    name: 'Computer',
    icon_url:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="#FD3D57" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"/></svg>',
    subcategories: [
      {
        id: '7-1',
        slug: 'macbook',
        name: 'Macbook',
        subcategories: [
          { id: '7-1-1', slug: 'macbook-ml', name: 'Mackbook ml' },
          { id: '7-1-2', slug: 'macbook-pro', name: 'Mackbook pro' },
          { id: '7-1-3', slug: 'macbook-air', name: 'Mackbook air' },
          { id: '7-1-4', slug: 'macbook-2015', name: 'Mackbook 2015' },
          { id: '7-1-5', slug: 'macbook-2020', name: 'Mackbook 2020' }
        ]
      },
      {
        id: '7-2',
        slug: 'laptop',
        name: 'Laptop',
        subcategories: [
          { id: '7-2-1', slug: 'razer', name: 'Razer' },
          { id: '7-2-2', slug: 'hp-laptop', name: 'Hp Laptop' },
          { id: '7-2-3', slug: 'dell-notebook', name: 'Dell Notebook' },
          { id: '7-2-4', slug: 'asus', name: 'Asus' },
          { id: '7-2-5', slug: 'lenovo', name: 'Lenovo' }
        ]
      }
    ]
  },
  {
    id: '8',
    slug: 'mobile',
    name: 'Mobile',
    icon_url:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="#FD3D57"><path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm10 0H8v14h8z"/><path d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>',
    subcategories: []
  }
]

export default categories

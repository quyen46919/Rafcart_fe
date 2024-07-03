interface Product {
  name: string
  price: number
  options?: {
    size?: Size
    color?: string
  }
  target_quantity: number
}
interface orderSummaryData {
  products: Product[]
  shipping_fee: number
}
enum Size {
  S = 'Small',
  MD = 'Medium',
  LG = 'Large',
  XL = 'Extra Large'
}
export const orderSummaryData = {
  products: [
    {
      name: 'Beigh Knitted Shoes hsjKAHS  DHAKJHD H ajhd wqh ',
      price: 84,
      options: {
        size: Size.MD
      },
      target_quantity: 1
    },
    {
      name: 'Sofa ABC XYZ javascript:&apos;<svg onload&equals;alert&lpar;1&rpar;&nvgt;&apos;"',
      price: 84,
      options: {
        size: Size.LG,
        color: 'Red'
      },
      target_quantity: 1
    },
    {
      name: 'Beigh Knitted Shoes',
      price: 84,
      options: {
        color: '<script>alert("hello world")</script>'
      },
      target_quantity: 20
    },
    {
      name: 'Chair DEF UVW &lt🤓🤓🤓🤓🤓🤓',
      price: 3,
      options: {
        color: '<h3>RED</h3>'
      },
      target_quantity: 100
    },
    {
      name: 'Beigh Knitted Shoes',
      price: 2,
      options: {
        color: 'blue'
      },
      target_quantity: 2
    }
  ],
  shipping_fee: 100
}

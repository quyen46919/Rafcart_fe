const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PRODUCT_DETAIL: '/product-detail/:id',
  CHECKOUT: '/checkout',
  WISHLIST: '/wishlist',
  CART: '/cart',
  ORDER_COMPLETED: '/order-completed',
  ORDER_CANCELLED: '/order-cancelled',
  PROFILE: '/profile',
  CHANGE_PASSWORD: '/change-password',
  MANAGE_ADDRESS: '/manage-address',
  ACCOUNT: '/account',
  FILTER: '/filter',
  PAGE_NOT_FOUND: '/:pathMatch(.*)*',
};
export default ROUTES;

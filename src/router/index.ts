import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/home/Homepage.vue'
import Login from '@/pages/login/Login.vue'
import Signup from '@/pages/signup/Signup.vue'
import ProductDetail from '@/pages/productDetail/ProductDetail.vue'
import Cart from '@/pages/cart/Cart.vue'
import WishList from '@/pages/profile/WishList.vue'
import Checkout from '@/pages/checkout/Checkout.vue'
import OrderCompleted from '@/pages/orderCompleted/OrderCompleted.vue'
import OrderCancelled from '@/pages/orderCancelled/OrderCancelled.vue'
import Profile from '@/pages/profile/Profile.vue'
import ChangePassword from '@/pages/profile/ChangePassword.vue'
import ManageAddress from '@/pages/profile/ManageAddress.vue'
import Account from '@/pages/profile/Account.vue'
import Filter from '@/pages/filter/Filter.vue'
import PageNotFound from '@/pages/pageNotFound/PageNotFound.vue'
import { isEmpty } from 'lodash'
import ROUTES from './ROUTES'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ROUTES.HOME,
      name: 'home',
      component: Homepage
    },
    {
      path: ROUTES.LOGIN,
      name: 'login',
      component: Login
    },
    {
      path: ROUTES.SIGNUP,
      name: 'signup',
      component: Signup
    },
    {
      path: ROUTES.PRODUCT_DETAIL,
      name: 'product-detail',
      component: ProductDetail
    },
    {
      path: ROUTES.CHECKOUT,
      name: 'checkout',
      component: Checkout
    },
    {
      path: ROUTES.WISHLIST,
      name: 'wishlist',
      component: WishList
    },
    {
      path: ROUTES.CART,
      name: 'cart',
      component: Cart
    },
    {
      path: ROUTES.ORDER_COMPLETED,
      name: 'order-completed',
      component: OrderCompleted
    },
    {
      path: ROUTES.ORDER_CANCELLED,
      name: 'order-cancelled',
      component: OrderCancelled
    },
    {
      path: ROUTES.PROFILE,
      name: 'profile',
      component: Profile
    },
    {
      path: ROUTES.CHANGE_PASSWORD,
      name: 'change-password',
      component: ChangePassword
    },
    {
      path: ROUTES.MANAGE_ADDRESS,
      name: 'manage-address',
      component: ManageAddress
    },
    {
      path: ROUTES.ACCOUNT,
      name: 'account',
      component: Account
    },
    {
      path: ROUTES.FILTER,
      name: 'filter',
      component: Filter
    },
    {
      path: ROUTES.PAGE_NOT_FOUND,
      component: PageNotFound
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, _, next) => {
  const user = { username: 'admin', email: 'admin' }
  if (
    to.name !== 'login' &&
    to.name !== 'signup' &&
    isEmpty(user) &&
    !(to.name === 'home' || to.name === 'product-detail' || to.name === 'filter' || to.name === 'cart')
  )
    next({ name: 'login' })
  else next()
})

router.beforeEach((to, _, next) => {
  const user = { username: 'admin', email: 'admin' }
  if ((to.name === 'login' || to.name === 'signup') && !isEmpty(user)) next({ name: '' })
  else next()
})

export default router

<template>
  <Breadcrumb class="!justify-start mt-4" :breadcrumbs="breadcrumbs" />
  <van-form @submit="handleSubmit">
    <div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
      <div class="lg:col-span-8 mb-6">
        <div class="flex-col">
          <SectionBox section="Billing Details" class="font-semibold mb-4" />
          <div class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                :asterisk="true"
                value=""
                helperText=""
                v-model="firstName"
                :rules="[
                  { required: true, message: 'The field is required' },
                  { validator: nameValidator, message: 'The input must be a name and not contain numbers' }
                ]"
              />
              <Input
                label="Last Name"
                :asterisk="true"
                value=""
                helperText=""
                v-model="lastName"
                :rules="[
                  { required: true, message: 'The field is required' },
                  { validator: nameValidator, message: 'The input must be a name and not contain numbers' }
                ]"
              />
            </div>
            <Input label="Company Name" value="" helperText="" v-model="company" />
            <Input
              label="Country/Region"
              :asterisk="true"
              value=""
              helperText=""
              v-model="country"
              :rules="[{ required: true, message: 'The field is required' }]"
            />
            <Input
              label="Street Address"
              :asterisk="true"
              value=""
              helperText=""
              v-model="streetAddress"
              :rules="[{ required: true, message: 'The field is required' }]"
            />
            <Input
              label="Town/City"
              :asterisk="true"
              value=""
              helperText=""
              v-model="townCity"
              :rules="[{ required: true, message: 'The field is required' }]"
            />
            <Input
              label="Zip Code"
              :asterisk="true"
              type="number"
              value=""
              helperText=""
              v-model="zipCode"
              :rules="[
                { required: true, message: 'The field is required' },
                { validator: zipCodeValidator, message: 'The input must be a zip code and contain 5 to 6 numbers' }
              ]"
            />
            <Input
              label="Phone Number"
              :asterisk="true"
              type="number"
              value=""
              helperText=""
              v-model="phoneNumber"
              :rules="[
                { required: true, message: 'The field is required' },
                { validator: phoneValidator, message: 'The input must be a phone number and contain 10 numbers' }
              ]"
            />
            <Input
              label="Email Address"
              :asterisk="true"
              value=""
              helperText=""
              v-model="email"
              :rules="[
                { required: true, message: 'The field is required' },
                { validator: emailValidator, message: 'The input must be email' }
              ]"
            />
          </div>
        </div>
      </div>
      <div class="lg:col-span-4">
        <div class="flex-col">
          <SectionBox section="Your Order" class="font-semibold" />
          <div>
            <OrderSummary v-bind="orderSummaryData" class="mt-4" />
            <div class="flex items-center mb-4 mt-2">
              <CheckBox
                @click="handleCheckBox"
                :checked="isCheck"
                :label="
                  h('span', {}, [
                    'Agree to our ',
                    h('a', { href: '/terms', target: 'blank', class: 'custom-link text-red-500' }, 'terms & conditions')
                  ])
                "
              />
            </div>
            <RButton
              :isDisabled="!isCheck"
              type="submit"
              v-if="!isSubmitting"
              class="bg-primary px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm w-full block text-center hover:border-primary"
              variant="contained"
              content="Place order"
            />
            <RButton
              v-else
              class="bg-primary px-4 py-3 font-medium rounded-md uppercase text-sm w-full block text-center"
              variant="contained"
              content="Place order"
              :isLoading="true"
            />
          </div>
        </div>
      </div>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
// import { useCart } from '@/store/cartStore'
// import OrderAPI from '@/api/order.api'
// import { useAuth } from '@/store/authStore'
import { Form, Field, CellGroup } from 'vant'
import SectionBox from '@/components/molecules/SectionBox/SectionBox.vue'
import Input from '@/components/atoms/Input/Input.vue'
import OrderSummary from '@/components/molecules/OrderSummary/OrderSummary.vue'
import CheckBox from '@/components/atoms/Checkbox/CheckBox.vue'
import { h } from 'vue'
import RButton from '@/components/atoms/RButton/RButton.vue'
import { orderSummaryData } from '@/faker/OrderSummary'
import Breadcrumb from '@/components/atoms/Breadcrumb/Breadcrumb.vue'
import { error } from 'console'
import { closeToast, showLoadingToast } from 'vant'
const firstName = ref('')
const lastName = ref('')
const country = ref('')
const company = ref('')
const streetAddress = ref('')
const townCity = ref('')
const zipCode = ref('')
const phoneNumber = ref('')
const email = ref('')
const isCheck = ref(false)
const isSubmitting = ref(false)
const nameValidator = (val: string) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(val)
const emailValidator = (val: any) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
const phoneValidator = (val: string) => /^(0|1)\d{9}$/.test(val)
const zipCodeValidator = (val: string) => /^\d{5}(\d{1})?$/.test(val)
const handleCheckBox = () => {
  isCheck.value = !isCheck.value
}

const breadcrumbs = [
  {
    url: '/',
    prefixIcon: h('i', { class: 'fas fa-home' })
  },
  {
    url: '/filter',
    label: 'SHOP'
  },
  {
    url: '/checkout',
    label: 'Checkout'
  }
]

// const cartStore = useCart()
// const cart = computed(() => cartStore.getCart)
// // const user = (JSON.parse(localStorage.getItem('auth') || '') as any)

// const total = computed(() => {
//   let total = 0
//   cart.value.forEach((item) => {
//     total += Number((item?.price - (item?.price * item?.discount) / 100).toFixed(1)) * item?.targetQuantity
//   })
//   return total.toFixed(1)
// })

const handleSubmit = async () => {
  if (isCheck.value == true) {
    isSubmitting.value = true
  }

  // e.preventDefault()
  // if (!user?.id) return
  // isSubmitting.value = true
  // try {
  //   const res: any = await OrderAPI.createOrder({
  //     description: description.value,
  //     receiver_address: address.value,
  //     receiver_name: firstName.value + ' ' + lastName.value,
  //     receiver_phone: phoneNumber.value,
  //     user_id: user?.id
  //   })
  //   for (const item of cart.value) {
  //     await OrderAPI.createOrderDetail(res.id, {
  //       order_id: res.data?.id,
  //       amount: item.targetQuantity,
  //       discount: item.discount,
  //       price: item.price,
  //       product_id: item.id
  //     })
  //   }
  //   const paymentRes = await OrderAPI.createPaymentOrder(res.data?.id)
  //   localStorage.setItem('order_id', res?.data?.id)
  //    window.location.href =  paymentRes?.data?.approved_url;
  // } catch (error) {
  //   console.log('error', error)
  // } finally {
  //   isSubmitting.value = false
  // }
}
</script>

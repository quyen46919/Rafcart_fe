<template>
  <div>
    <BackgroundBreadcrumb 
    title="About us" 
    :thumbnail="BreadcrumbBg"
    :breadcrumbs="breadcrumbs" />
    <div class="flex justify-center mt-8">
      <div class="w-full max-w-7xl bg-white px-8 pt-6 pb-8 mb-4 flex">
        <div class="w-full md:w-2/3 pr-8 shadow-md py-6 px-6 mr-6">
          <h2 class="text-2xl uppercase font-bold mb-2">Leave Us a Message</h2>
          <p class="mb-4">Use the form below to get in touch with the sales team</p>
          <van-form ref="form" @submit="submitForm">
            <div class="grid sm:grid-cols-2 gap-4 py-3">
                  <Input
                label="First Name"
                asterisk="true"
                v-model="firstName"
                :rules="rules.firstName"
              />
              <Input
                label="Last Name"
                asterisk="true"
                v-model="lastName"
                :rules="rules.lastName"
              />
            </div>
            <Input
              label="Email Address"
              asterisk="true"
              class="py-3"
              v-model="email"
              :rules="rules.email"
            />
            <Input
              label="Subject"
              asterisk="true"
              v-model="subject"
              :rules="rules.subject"
            />
            <Input
              label="Message"
              type="text"
              class="py-3"
              asterisk="true"
              v-model="message"
              :rules="rules.message"
            />
            <div class="flex mt-4">
              <RButton
                type="submit"
                class="bg-primary text-white px-4 py-2 font-medium rounded-md uppercase transition-all duration-200 hover:bg-transparent hover:text-primary hover:border-primary"
                variant="contained"
                content="Send Message"
              />
            </div>
          </van-form>
        </div>
        <div class="w-full md:w-1/3 pl-8 shadow-md">
          <h3 class="text-lg uppercase font-bold mb-5">Our Store</h3>
          <p class="py-2">7895 Dr New Albuquerque, NM 19800, United States of America</p>
          <p>+568 477 256, +568 254 575</p>
          <p class="py-2">info@domain.com</p>
          <h3 class="text-lg uppercase font-bold mt-4 mb-2">Hours of Operation</h3>
          <ul class="space-y-3">
            <li v-for="day in hoursOfOperation" :key="day.day" class="flex justify-between">
              <span>{{ day.day }}</span>
              <span class="mr-4">{{ day.hours }}</span>
            </li>
          </ul>
          <h3 class="text-lg uppercase font-bold mt-4 mb-2">Careers</h3>
          <p>
            If you are interested in employment opportunities at RAFCART's, please email us:
            <a class="text-primary">contact@familiar.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Form, Field } from 'vant'
import BackgroundBreadcrumb from '@/components/molecules/BackgroundBreadcrumb/BackgroundBreadcrumb.vue'
import BreadcrumbBg from '@/assets/images/breadcrumb-bg.jpg'
import Input from '@/components/atoms/Input/Input.vue'
import { nameValidator, emailValidator } from '@/shared/validate/regexes.ts'
import hoursOfOperation from '@/faker/contact-us.ts'

const breadcrumbs = [
  {
    url: '/',
    label: 'Home',
    prefixIcon: h('i', { class: 'fas fa-home' })
  },
  {
    url: '/about-us',
    label: 'About us'
  }
]

const firstName = ref<string>('')
const lastName = ref<string>('')
const email = ref<string>('')
const subject = ref<string>('')
const message = ref<string>('')
const rules = {
  firstName: [
    { required: true, message: 'The field is required' },
    { validator: nameValidator, message: 'The input must be a name and not contain numbers' }
  ],
  lastName: [
    { required: true, message: 'The field is required' },
    { validator: nameValidator, message: 'The input must be a name and not contain numbers' }
  ],
  email: [
    { required: true, message: 'The field is required' },
    { validator: emailValidator, message: 'The input must be email' }
  ],
  subject: [
    { required: true, message: 'The field is required' }
  ],
  message: [
    { required: true, message: 'The field is required' }
  ]
}

const form = ref<HTMLFormElement | null>(null)

const submitForm = async () => {
  if (form.value) {
    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    }
    console.log('Form Data:', formData)
  }
}
</script>

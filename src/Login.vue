<template>
    <div class="block w-full sm:grid grid-cols-2">
      <div class="bg-white h-screen">
        <div class="font-roboto ml-6 mt-4 hidden sm:block">
          <img src="../assets/Ellipse.png" alt="img" class ="w-3 h-3 inline mr-1"/>
          HOVASTORE
        </div>
        <div class="w-24 h-24 sm:hidden ml-36 mt-12">
          <img src="../assets/logo.png" alt="Logo" />
        </div>
  
        <h3 class="sm:text-4xl xs:text-lg font-roboto mt-8 sm:mt-20 sm:ml-32 ml-36">Welcome back</h3>
        <h1 class="sm:ml-32 ml-14 font-light text-gray-400">Welcome back! please enter your details.</h1>
  
        <Form @submit="onSubmit">
        <div class="mt-6 sm:ml-32 ml-8">
          <span class=" text-md">Email</span>
          <Field v-model="email" name ="email" type="text" :rules="validateEmail" class="  block mt-1 p-2  w-80 border border-gray-100 rounded-md placeholder:font-light placeholder:text-gray-500"  id="email" placeholder="Enter your email "/>
          <p class="text-red-500">Your email is {{ email }}</p>
          <ErrorMessage name="email" class="text-red-500" />
        </div>
  
        <div class="mt-2 sm:ml-32 ml-8">
          <span class=" text-md">Password</span>
          <Field v-model = "password" name ="password"  type="password" :rules="validatePassword" class="  block mt-1 p-2 w-80 xs:w-4 border border-gray-100 rounded-md placeholder:font-light placeholder:text-gray-500" id="password" placeholder="*************"/>
          <ErrorMessage name="password" class="text-red-500" />
        </div>
        <div class="mt-3 ">
          <a href="#" class="font-bold text-[#581845] text-sm ml:32 sm:ml-56 ml-32">Forgot Password</a>
        </div>
        <button class="w-80 sm:ml-32 ml-8 bg-[#581845] text-white p-2 rounded-lg mt-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                      Sign in
        </button>
      </Form>
  
        <button class="w-80 sm:ml-32 ml-8 border border-gray-300 text-md p-2 rounded-lg mt-6 hover:bg-[#581845] hover:text-white">
            <img src="../assets/google.svg" alt="img" class ="w-6 h-6 inline mr-2"/>
                      Sign in with Google
  
        </button>
  
        <div class="sm:ml-44 ml-16 text-sm text-gray-400 mt-4">
                      Don't have an account?
                      <span class="font-bold text-[#581845] text-sm">Sign up for free</span>
        </div>
      </div>
      
      <div class=" bg-[#F8F2F0]  relative flex items-center justify-center h-screen invisible sm:visible">
        <div class="w-64 h-64 ">
          <img src="../assets/logo.png"/>
        </div>
        
        <div class="absolute bottom-0 left-0 right-0 h-1/2 backdrop-blur"></div>
      </div>
    </div>
  </template>
  <script>
  import { Form, Field, ErrorMessage } from 'vee-validate';
  
  export default {
    name: 'LoginView',
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data:()=>{
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      onSubmit(values) {
        console.log(JSON.stringify(values, null, 2));
      },
      validateEmail(value) {
        // if the field is empty
        if (!value) {
          return 'Email is required';
        }
        // if the field is not a valid email
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
          return 'This field must be a valid email';
        }
        // All is good
        return true;
      },
      validatePassword(value) {
        // if the field is empty
        if (!value) {
          return 'Password is required';
        }
        return true;
      },
    }
  }
  </script>
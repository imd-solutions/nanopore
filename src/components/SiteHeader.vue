<template>
    <div class="sticky top-0 z-40 h-25">
            <div class="w-full h-20 px-6 bg-[#1F738A] flex items-center justify-between text-white">
              <div class="flex">
                <div class="inline-block lg:hidden flex items-center mr-4">
                  <button class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger" @click="toggleSidebar()">
                    <i class="pi pi-bars" style="font-size: 1.5rem"></i>                    
                  </button>
                </div>                
              </div>

              <div class="flex items-center relative space-x-4">
                <i class="pi pi-bell" style="font-size: 1.5rem"></i>
                <img :src="userImg" class="w-10 h-10 rounded-full " @click="dropDownOpen = !dropDownOpen">
              </div>

            </div>

            <div class="flex z-10 absolute lg:hidden">
                <div class="relative bg-gray-100 border border-t-0 shadow-xl text-gray-700 rounded-b-lg w-48" :class="dropDownOpen ? '' : 'hidden'">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200 flex space-x-2"><i class="pi pi-home"></i><span>Dashboard</span></a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200 flex space-x-2"><i class="pi pi-book"></i><span>Orders</span></a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200 flex space-x-2"><i class="pi pi-box"></i><span>Product</span></a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200 flex space-x-2"><i class="pi pi-user"></i><span>Account</span></a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200 flex space-x-2"><i class="pi pi-bell"></i><span>Notification</span></a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200 flex space-x-2"><i class="pi pi-sign-out"></i><span>Logout</span></a>
                </div>
            </div>

    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import userImg from './../assets/download.jpeg'

    const dropDownOpen = ref(false)

    function toggleSidebar() {
        dropDownOpen.value = !dropDownOpen.value
    }
</script>
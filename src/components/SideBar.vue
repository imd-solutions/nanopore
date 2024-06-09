<template>
    
    <div class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 z-30" :class="sideBarOpen ? '' : 'hidden'" id="main-nav">

          <div class="w-full h-20 flex px-4 items-center bg-[#1F738A]">
            <p class="font-semibold text-3xl text-blue-400 pl-4">LOGO</p>
          </div>

        
          <div class="flex flex-col border-r h-screen">
            <div class="mb-4 px-4  border-b">
            <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer space-x-2">
                <i class="pi pi-home" style="color: #1F738A"></i>
                <span class="text-gray-700">Dashboard</span>
            </div>
            <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer space-x-2">
                <i class="pi pi-book" style="color: #1F738A"></i>
              <span class="text-gray-700">Orders</span>
            </div>
            <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer space-x-2">
                <i class="pi pi-box" style="color: #1F738A"></i>
              <span class="text-gray-700">Products</span>
            </div>            
          </div>

          <div class="mb-4 px-4">
            <div class="w-full flex items-center text-blue-400 h-10 pl-4 bg-gray-200 hover:bg-gray-200 rounded-lg cursor-pointer space-x-2">
                <i class="pi pi-user" style="color: #1F738A"></i>
              <span class="text-gray-700">Account</span>
            </div>
            <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer space-x-2">
                <i class="pi pi-bell" style="color: #1F738A"></i>
              <span class="text-gray-700">Notification</span>
            </div>
          </div>
          </div>
          

        </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sideBarOpen = ref(false)

</script>
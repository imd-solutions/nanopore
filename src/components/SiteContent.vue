<template>
  <div id="home">
    <Breadcrumbs />

    <div class="lg:flex justify-between items-center mb-2 text-[#1F738A]">
      <p class="text-2xl font-semibold mb-2 lg:mb-0">Team C - Orion</p>
    </div>

    <div class="lg:flex justify-between items-center mb-2 space-y-2">
      <div class="flex space-x-5">
        <div class="flex flex-col text-xs text-gray-500">
          <span>C000000001 </span>
          <span>Charlotte Test User</span>
        </div>
        <div class="flex">
          <img
            class="w-10 h-10 rounded-full"
            :src="userImg"
            alt="Rounded avatar"
          />
          <img
            class="w-10 h-10 rounded-full"
            :src="userImg"
            alt="Rounded avatar"
          />
          <img
            class="w-10 h-10 rounded-full"
            :src="userImg"
            alt="Rounded avatar"
          />
        </div>
      </div>

      <button
        class="bg-transparent hover:bg-[#1F738A] text-[#1F738A] font-semibold hover:text-white py-2 px-4 border border-[#1F738A] hover:border-transparent rounded-lg"
      >
        Create New Account
      </button>
    </div>

    <div class="flex items-center flex-row space-x-1 text-xs text-[#1F738A] mb-5">
      <i class="pi pi-plus"></i>
      <p>Add a new Member</p>
    </div>

    <section class="py-8 border-t-2">
      <div class="container px-4 mx-auto">
        <div class="p-10 mb-4 bg-white shadow rounded">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full lg:w-5/12 flex px-4 mb-6 lg:mb-0">
              <img
                class="w-10 h-10 mr-4 object-cover rounded-full"
                :src="userImg"
                alt=""
              />
              <div class="flex items-center justify-center">
                <p class="text-sm font-medium">John Smith</p>
              </div>
            </div>
            <div class="w-1/2 lg:w-2/12 px-4 mb-6 lg:mb-0">
              <p class="text-xs text-gray-500">john@shuffle.dev</p>
            </div>
            <div class="w-1/2 lg:w-2/12 px-4 mb-6 lg:mb-0">
              <p class="text-xs text-gray-500">14/03/2022</p>
            </div>
            <div class="w-full lg:w-2/12 px-4 mb-6 lg:mb-0">
              <div class="relative">
                <select
                  class="appearance-none block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                  name="field-name"
                >
                  <option>Admin</option>
                  <option>Leader</option>
                  <option>Member</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
                >
                <i class="pi pi-chevron-down"></i>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/12 px-4">
              <div class="flex items-center justify-end">
                <i class="pi pi-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "./Breadcrumbs.vue";
import userImg from "./../assets/download.jpeg";
</script>

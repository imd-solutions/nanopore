<template>
  <div class="leading-normal tracking-normal">
    <div class="flex flex-wrap">
      <Sidebar />

      <div
        class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen flex flex-col justify-between"
      >
        <SiteHeader />

        <div class="p-6 bg-gray-100 mb-20 flex-grow">
          <SiteContent />
        </div>

        <SiteFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./../components/SideBar.vue";
import SiteHeader from "./../components/SiteHeader.vue";
import SiteContent from "./../components/SiteContent.vue";
import SiteFooter from "./../components/SiteFooter.vue";
</script>

<style scoped></style>

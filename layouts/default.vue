<script setup lang="ts">
import TheMenu from "~/components/TheMenu.vue";
</script>

<template>
  <div class="max-w-full h-screen flex flex-col overflow-hidden">
    <TheMenu />
    <div class="drawer md:drawer-open h-screen">
      <input id="zephyr-launcher-app" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center overflow-auto">
        <main class="container mx-auto">
          <slot />
        </main>
      </div>
      <div class="drawer-side fixed h-full">
        <label for="zephyr-launcher-app" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Crédits</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

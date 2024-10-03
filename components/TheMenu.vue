<script setup lang="ts">

</script>

<template>
  <nav class="navbar bg-base-100">
    <div class="navbar-start">
      <a class="btn btn-ghost text-xl">
        Zephyr Engine
      </a>
    </div>
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <NuxtLink target="_blank" to="https://discord.com" class="btn">
        <IconsDiscord class="w-5 h-5" />
        Discord
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>

</style>
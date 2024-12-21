<template>
  <v-layout class="rounded rounded-md">
    <NavigationDrawer />
    <VAppBar />
    <VMain />
  </v-layout>
</template>

<script setup lang="tsx">
import NavigationDrawer from './components/navigation-drawer.vue'
import VMain from './components/main.vue'
import VAppBar from './components/app-bar.vue'
</script>

<style scoped lang="scss">
.v-layout {
  height: 100%;
  overflow: hidden;
  .v-app-bar {
    box-shadow: none;
  }
}
</style>

<template>
  <v-main style="min-height: 100%">
    <div class="main-container">
      <RouterView />
    </div>
  </v-main>
</template>

<script setup lang="tsx"></script>

<style scoped lang="scss">
.v-main {
  background-color: #fafafa;
  .main-container {
    height: calc(100% - 60px);
    margin: 20px;
    padding: 10px;
    box-sizing: content-box;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
  }
}
</style>

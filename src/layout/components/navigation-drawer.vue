<template>
  <v-navigation-drawer>
    <!-- <div class="logo-container">
      <img :src="logoImg" />
      <div class="logo-text">
        <span>豪</span>
        <span>籽</span>
        <span>街</span>
      </div>
    </div> -->
    <template v-slot:prepend>
      <div class="logo-container">
        <v-list-item
          lines="two"
          :prepend-avatar="logoImg"
          subtitle="Logged in"
          title="Jane Smith"
        ></v-list-item>
        <div class="logo-menu-col">
          <v-icon icon="mdi-chevron-left" color="#fff" size="small"></v-icon>
        </div>
      </div>
    </template>

    <v-divider color="#999"></v-divider>

    <v-list density="compact" nav active-color="#369D4F">
      <v-list-item prepend-icon="mdi-home-city" title="首页" value="home" to="/home"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="笔记" value="note" to="/note"></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="组件"
        value="components"
        to="/components"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="tsx">
import logoImg from '@/assets/logo.jpg'
</script>

<style scoped lang="scss">
.v-navigation-drawer {
  border: none;
  .v-list {
    padding: 30px;
  }
}
.logo-container {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-menu-col {
    position: absolute;
    right: 0;
    width: 12px;
    height: 40px;
    background-color: #37c661;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    .v-icon {
      position: relative;
      left: -3px;
      top: 10px;
    }
  }
  img {
    width: 60px;
  }
  .logo-text {
    font-size: 24px;
    span {
      &:nth-child(1) {
        color: #ed8824;
      }
      &:nth-child(2) {
        color: #347ab7;
      }
      &:nth-child(3) {
        color: #f5bb24;
      }
    }
  }
}
</style>

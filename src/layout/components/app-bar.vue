<template>
  <v-app-bar>
    <div class="app-bar-left"></div>
    <div class="app-bar-right">
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-avatar v-bind="props">
            <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
          </v-avatar>
        </template>

        <v-list @click:select="handleClickListItem">
          <v-list-item value="logout" color="primary">
            <template v-slot:prepend>
              <v-icon icon="mdi-clock"></v-icon>
            </template>

            <v-list-item-title>退出登录</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function handleClickListItem(value: { id: unknown; value: boolean; path: unknown[] }) {
  if (value.id === 'logout') {
    router.push(`/login`)
  }
}
</script>

<style scoped lang="scss">
.v-app-bar {
  &:deep(.v-toolbar__content) {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;

    .v-avatar {
      cursor: pointer;
    }
  }
}
</style>

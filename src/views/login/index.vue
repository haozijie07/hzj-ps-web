<template>
  <div class="login-container">
    <v-card class="login-form">
      <div class="login-welcome-text">欢迎您</div>
      <v-form @submit.prevent>
        <v-text-field
          v-model="formData.username"
          label="用户名"
          :rules="formRules.username"
        ></v-text-field>

        <v-text-field
          v-model="formData.password"
          label="密码"
          :rules="formRules.password"
        ></v-text-field>

        <v-btn class="mt-2" type="submit" block color="success">登录</v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: '',
})

const formRules = ref({
  username: [
    (v: string) => {
      if (!!v) return true
      return '请填写用户名'
    },
  ],
  password: [
    (v: string) => {
      if (!!v) return true
      return '请填写密码'
    },
  ],
})
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    min-width: 300px;
    padding: 20px;
    background-color: #fff;

    .login-welcome-text {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 800;
      color: black;
    }

    .v-form {
      width: 100%;
    }
  }
}
</style>

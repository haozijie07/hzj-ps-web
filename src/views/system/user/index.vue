<template>
  <div class="user-container">
    <div class="table-header">
      <v-dialog max-width="340">
        <template v-slot:activator="{ props: activatorProps }">
          <HzjButton v-bind="activatorProps" type="primary"> 新增 </HzjButton>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card width="30vw">
            <v-card-title class="d-flex justify-space-between align-center">
              <div class="text-medium-emphasis ps-2">新增用户</div>
              <v-btn icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
            </v-card-title>
            <v-divider class="mb-4"></v-divider>
            <v-form ref="formRef" style="margin: 20px" @submit.prevent>
              <v-text-field
                v-model="formData.name"
                label="姓名"
                :rules="formRules.name"
              ></v-text-field>

              <v-text-field
                v-model="formData.phone"
                label="手机号"
                :rules="formRules.phone"
              ></v-text-field>

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

              <v-divider class="mb-4"></v-divider>
              <div style="display: flex; justify-content: end">
                <HzjButton @click="isActive.value = false"> 取消 </HzjButton>
                <HzjButton
                  style="margin-left: 5px"
                  type="primary"
                  @click="handleSaveUser(isActive)"
                >
                  保存
                </HzjButton>
              </div>
            </v-form>
          </v-card>
        </template>
      </v-dialog>
    </div>
    <ag-grid-vue class="ag-grid-vue" :rowData="rowData" :columnDefs="colDefs"> </ag-grid-vue>
  </div>
</template>

<script setup lang="tsx">
import { defineComponent, ref, type Ref } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import { VForm } from 'vuetify/components'
import HzjButton from '@/components/baseComponents/button/index.vue'
import { post } from '../../../axios'

const rowData = ref([
  { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, 操作: '1' },
  { make: 'Ford', model: 'F-Series', price: 33850, electric: false, 操作: '2' },
  { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, 操作: '3' },
])

const colDefs = ref([
  { field: 'make' },
  { field: 'model' },
  { field: 'price' },
  { field: 'electric' },
  {
    field: '操作',
    cellRenderer: defineComponent(({ params }) => {
      return () => {
        return <div>{params.value}</div>
      }
    }),
  },
])

const formData = ref({
  name: '',
  phone: '',
  username: '',
  password: '',
})

const formRules = ref({
  name: [
    (v: string) => {
      if (!!v) return true
      return '请填写姓名'
    },
  ],
  phone: [
    (v: string) => {
      if (!!v) return true
      return '请填写手机号'
    },
  ],
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

const formRef = ref<InstanceType<typeof VForm>>()
async function handleSaveUser(dialogActive: Ref<boolean>) {
  const { valid } = (await formRef.value?.validate()) || {}
  if (valid) {
    const res = await post('api/user', formData.value)
    dialogActive.value = false
  }
}
</script>

<style scoped lang="scss">
.user-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .table-header {
    margin-bottom: 8px;
  }
  .ag-grid-vue {
    flex-grow: 1;
  }
}
</style>

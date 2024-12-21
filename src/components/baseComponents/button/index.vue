<template>
  <v-btn v-if="props.type === 'primary'" size="small" :color="primaryBg" v-bind="props.oriProps">
    <slot></slot>
  </v-btn>
  <v-btn v-else size="small" :color="defaultBg" v-bind="props.oriProps">
    <slot></slot>
  </v-btn>
</template>

<script setup lang="tsx">
import { defaultBg, primaryBg } from '@/global/color'

const props = withDefaults(
  defineProps<{
    type?: 'default' | 'primary'
    oriProps?: any
  }>(),
  {
    type: 'default',
  },
)
</script>

<style scoped lang="scss">
.v-btn {
  font-size: 14px;
  color: #ffffff !important;
}
</style>

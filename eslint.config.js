import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import oxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  // 定义需要检查的文件
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  // 定义需要忽略的文件
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // 添加 Vue 配置
  {
    name: 'vue-config',
    ...pluginVue.configs['flat/essential'],
  },

  // 添加 TypeScript 配置
  {
    name: 'typescript-config',
    ...vueTsEslintConfig(),
  },

  // 添加 oxlint 配置
  {
    name: 'oxlint-config',
    ...oxlint.configs['flat/recommended'],
  },

  // 添加 Prettier 配置
  {
    name: 'prettier-skip-formatting',
    ...skipFormatting,
  },

  // 自定义规则
  {
    name: 'custom-rules',
    rules: {
      'vue/block-lang': 'off', // 关闭 block-lang 检查
      'vue/multi-word-component-names': 'off', // 允许单词组件名称
    },
  },
]

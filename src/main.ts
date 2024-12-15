/* ----------------------------------- app ---------------------------------- */
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

/* ---------------------------------- pinia --------------------------------- */
import { createPinia } from 'pinia'
app.use(createPinia())

/* --------------------------------- router --------------------------------- */
import router from './router'
app.use(router)

/* --------------------------------- vuetify -------------------------------- */
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5
        },
      },
    },
  },
})
app.use(vuetify)

app.mount('#app')

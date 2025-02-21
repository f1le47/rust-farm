import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18next from './common/i18next/i18next'

const app = createApp(App)

app.use(createPinia())
app.use(router)

i18next(app).mount('#app')

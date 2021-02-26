import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '/@/store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'//?Выдает ошибку в консоли
import { createI18n } from 'vue-i18n'
import en from "./locale/en.json"
import ua from "./locale/ua.json"
import ru from "./locale/ru.json"

const i18n = createI18n({
  locale: 'ua',
  messages: {
    en,
    ua,
    ru
  }
});

createApp(App)
    .use(i18n)
    .use(router)
    .use(store)
    .mount('#app')

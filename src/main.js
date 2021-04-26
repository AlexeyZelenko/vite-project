import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '/@/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/analytics'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'//?Выдает ошибку в консоли
import { createI18n } from 'vue-i18n'
import en from "./locale/en.json"
import ua from "./locale/ua.json"
import ru from "./locale/ru.json"

export const db = firebase.initializeApp({
  apiKey: "AIzaSyAnv0Xx7PyYGozncn-x41RkkfCS44xwNOQ",
  authDomain: "business-vue3.firebaseapp.com",
  projectId: "business-vue3",
  storageBucket: "business-vue3.appspot.com",
  messagingSenderId: "799176700714",
  appId: "1:799176700714:web:6ec1be6463afc18d7aa453",
  measurementId: "G-GH87QP28XE"
}).firestore()
// Initialize Firebase
export const analytics = firebase.analytics();

export const storage = firebase.storage()
export const auth = firebase.auth()

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

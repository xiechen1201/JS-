import { createApp } from 'vue';
// import { createPinia } from 'pinia';
import { createPinia } from './pinia';
import './assets/main.css';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

console.log(pinia);

app.use(pinia);
app.mount('#app');

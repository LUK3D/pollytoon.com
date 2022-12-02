import { createApp } from 'vue'
import './style.css'
import 'virtual:windi.css'
import App from './App.vue'
import { inject } from '@vercel/analytics';
import { TroisJSVuePlugin } from 'troisjs';
import vue3GoogleLogin from 'vue3-google-login'


const app = createApp(App);
app.use(TroisJSVuePlugin);



app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_API_CLIENT,
    scope: 'email',
    prompt: 'consent'
})




app.mount('#app')
//injecting Vercel Analytics
inject();
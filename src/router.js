import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'
import center from './components/center.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        // {
        //   path: '*',
        //   redirect: '/home'
        // },
        {
            path: '/',
            component: home
        },
        {
            path: '/center',
            component: center
        }
    ]
})

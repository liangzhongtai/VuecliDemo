import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Link = () => import(/* webpackChunkName: "about" */ '@/components/Link')
const Msg = () => import(/* webpackChunkName: "contact" */ '@/components/Msg')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/link',
      name: 'Link',
      component: Link
    },
    {
      path: '/Msg',
      name: 'Msg',
      component: Msg
    }
  ]
})

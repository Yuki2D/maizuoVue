import Vue from 'vue'
import Router from 'vue-router'
import film from '@/components/film/film'
import cinema from '@/components/cinema/cinema'
import discount from '@/components/discount/discount'
import me from '@/components/me/me'

import nowplaying from '@/components/film/nowplaying/nowplaying'
import commingsoon from '@/components/film/commingsoon/commingsoon'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "film"
    },
    {
      path: '/film',
      name: 'film',
      component: film,
      children: [
        {path: "nowplaying", name: "nowplaying",component: nowplaying},
        {path: "commingsoon", name: "commingsoon",component: commingsoon},
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema
    },
    {
      path: '/discount',
      name: 'discount',
      component: discount
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
  ]
})

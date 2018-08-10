import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import CreateUser from '../components/CreateUser'
import New from '../components/New'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/createUser',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/new',
      name: 'new',
      component: New
    }
  ]
})

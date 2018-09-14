import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Category from '@/components/Category'
import CmsCategory from '@/components/CmsCategory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category/:id_category',
      name: 'category',
      component: Category
    },
    {
      path: '/category/cms/:id_category',
      name: 'category_cms',
      component: CmsCategory
    }
  ]
})

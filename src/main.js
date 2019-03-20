// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import gndshome from './components/gndshome'
import gndsAbout from './components/gndsAbout'
import joinUs from './components/joinUs'
import project from './components/project'
import expertise from './components/expertise'
import gndNews from './components/gndNews'
import expertiseDetil from './components/expertiseDetil'
import memberDetil from './components/memberDetil'
import proDetil from './components/porDetil'
import gndNewsDetil from './components/gndNewsDetil'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$http = axios

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: gndshome},
    {path: '/gndsAbout', component: gndsAbout},
    {path: '/joinUs', component: joinUs},
    {path: '/project', component: project},
    {path: '/expertise', component: expertise},
    {path: '/gndNews', component: gndNews},
    {path: '/expertiseDetil', component: expertiseDetil, name: 'expertiseDetil'},
    {path: '/memberDetil', component: memberDetil, name: 'memberDetil'},
    {path: '/proDetil', component: proDetil, name: 'proDetil'},
    {path: '/gndNewsDetil', component: gndNewsDetil, name: 'gndNewsDetil'}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

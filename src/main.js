// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';

import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_TW.json';
localize({
  zh: {
    names: {
      email: '電子信箱',
      name: '姓名',
      address: '地址'
    }
  }
});
import { localize } from 'vee-validate';
localize('zh', zh);
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
extend('required', required);
extend('email', email);

import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency'

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  if(to.meta.requiresAuth){
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response)=> {
      if(response.data.success){
        next();
      }else{
        console.log('尚未驗證')
        next({
          path: '/login'
        })
      }
    })
  }else {
    next();
  }
})
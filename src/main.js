import Vue from 'vue'
import App from './App.vue'
// import AlloyTouch from './directives/alloy_touch_vue'
// Vue.use(AlloyTouch)

const routes =  {
  '/': App,
  'carousel': require('./carousel.vue')
}

var vm = new Vue({
  el: '#app',
  data: {
     currentRoute: window.location.hash?window.location.hash.replace('#',''): '/'
  },
  computed: {
    ViewComponent () {
      console.log(this.currentRoute)
      return routes[this.currentRoute] || 'NotFound'
    }
  },
  // render: h => {
  //   console.log(this) 
  //   h(this.ViewComponent)
  // }
 render (h) { 
   console.log(this) 
   return h(this.ViewComponent) 
  }
})

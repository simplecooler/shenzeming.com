import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

function formatNumber(res) {
  return ((res.data['0xa94a33f776073423e163088a5078feac31373990'] / 1000000000000000000).toLocaleString())
}

axios.get('https://explore.veforge.com/api/accounts/0x1dC4d587D1D23b1f944D733b9303dAacDa6BA6Fa/tokenBalances').then(res => {
  console.log('oceanex：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0x04893d5AC81F46d17BF7e5B8Fe87D92B3Ec33965/tokenBalances').then(res => {
  console.log('抹茶：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0xfEA31362302Ac85BAf602A65008FB897Dd19D927/tokenBalances').then(res => {
  console.log('bithumb golbal：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0xE8b5A14A3438ed2904088Dd7967eA07865a80D35/tokenBalances').then(res => {
  console.log('币威：',formatNumber(res))
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

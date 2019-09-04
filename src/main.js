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
axios.get('https://explore.veforge.com/api/accounts/0x4ece99F508ecAB5c26B0ad9216aC99c49c2C0Dca/tokenBalances').then(res => {
  console.log('15亿钱包：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0x3547343e82af68afD253851d50dCA7555203907c/tokenBalances').then(res => {
  console.log('16亿钱包：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0x4f40A5275afBa74c7F1eA79D96Ce2527E8EAbF1D/tokenBalances').then(res => {
  console.log('21亿钱包：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0xeB61E85eCd7b60FC39d9F140c345DBA29b200477/tokenBalances').then(res => {
  console.log('10亿钱包：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0xD7464f8ff0a3a83fFEfdD3FDefAEc5cc9cf245C1/tokenBalances').then(res => {
  console.log('2亿钱包：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0xf5d9e61e087dbc0f5e6bdc4292aa0ecce6b5a9ba/tokenBalances').then(res => {
  console.log('发给唯链私募钱包：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0x88A7e93753fe91AA394eE37Fdb41297bCd54C5f6/tokenBalances').then(res => {
  console.log('戎总：',formatNumber(res))
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

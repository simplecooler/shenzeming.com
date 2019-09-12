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

axios.get('https://explore.veforge.com/api/accounts/0x9A107A75cFF525b033A3e53CADaFe3D193B570EC/tokenBalances').then(res => {
  console.log('抹茶新地址：',formatNumber(res))
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
// axios.get('https://explore.veforge.com/api/accounts/0x88A7e93753fe91AA394eE37Fdb41297bCd54C5f6/tokenBalances').then(res => {
//   console.log('戎总：',formatNumber(res))
// })
// axios.get('https://explore.veforge.com/api/accounts/0x52aA200AAB1bCD26CF356d9a1Bedf587Cb759051/tokenBalances').then(res => {
//   console.log('DNV康总：',formatNumber(res))
// })
// axios.get('https://explore.veforge.com/api/accounts/0xD64d674778ce1D5f627E681b4d2c64C712f46ee1/tokenBalances').then(res => {
//   console.log('坤哥：',formatNumber(res))
// })
// axios.get('https://explore.veforge.com/api/accounts/0xc0D98292483a4c1980A1bFb1846Bb20330dF8Eb6/tokenBalances').then(res => {
//   console.log('东哥：',formatNumber(res))
// })
axios.get('https://explore.veforge.com/api/accounts/0x92636c14e349986FB7a68D6E8FB2617D86f9d1a9/tokenBalances').then(res => {
  console.log('熙：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0x6BB6cceAe17af1108496bbd170f0EA76c562135E/tokenBalances').then(res => {
  console.log('二文：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0x1Ef93966Bc5F203C5DE583Fe49022235dFfa0F88/tokenBalances').then(res => {
  console.log('艾总：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0x9902dcb39B92CA11b0B1445be0447c5Bf7c6A28E/tokenBalances').then(res => {
  console.log('艾总新地址：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0x847cc82DBB5a03AEae8043b02879d0c55BacdFDe/tokenBalances').then(res => {
  console.log('r：',formatNumber(res))
})
// axios.get('https://explore.veforge.com/api/accounts/0x96340A2b51Ec6c2e281DF6A6C9858d36aC35fa35/tokenBalances').then(res => {
//   console.log('汪：',formatNumber(res))
// })
axios.get('https://explore.veforge.com/api/accounts/0x597bAf65Ab8395468E200fB274Ff816956973b8B/tokenBalances').then(res => {
  console.log('钦：',formatNumber(res))
})
// axios.get('https://explore.veforge.com/api/accounts/0xD41CFb455FFe68FfBAB073eBBAd8B18a2980d816/tokenBalances').then(res => {
//   console.log('储：',formatNumber(res))
// })
// axios.get('https://explore.veforge.com/api/accounts/0x22057B0C21f795fe7d0d809C25f621adDB062689/tokenBalances').then(res => {
//   console.log('沫：',formatNumber(res))
// })
axios.get('https://explore.veforge.com/api/accounts/0x9777a4c96016d2C4EB38104b00808790774F1516/tokenBalances').then(res => {
  console.log('虎：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0x416BC99F9C29F7A7024698a9d6d33e53BEA4587a/tokenBalances').then(res => {
  console.log('君：',formatNumber(res))
})
// axios.get('https://explore.veforge.com/api/accounts/0x788725803b8ECC4A0F47cbD87D4CDc6c2959e7eC/tokenBalances').then(res => {
//   console.log('波：',formatNumber(res))
// })
// axios.get('https://explore.veforge.com/api/accounts/0xDCBA0Fc8eF89EAD3B4458C1d453624f0662d1D69/tokenBalances').then(res => {
//   console.log('强：',formatNumber(res))
// })
// axios.get('https://explore.veforge.com/api/accounts/0x8F3B951983B5aC6815e1b59A8c218a680b8c880e/tokenBalances').then(res => {
//   console.log('毛：',formatNumber(res))
// })
axios.get('https://explore.veforge.com/api/accounts/0x3292Ef0deC33401b32922d52Cef0fA83b1a13EA7/tokenBalances').then(res => {
  console.log('孙：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0x262Cc422E2d6ecb6877189EDCb4100B02D738979/tokenBalances').then(res => {
  console.log('史：',formatNumber(res))
})
// axios.get('https://explore.veforge.com/api/accounts/0x581E59b753Ff4fd468774671FbFd33f451fC49A9/tokenBalances').then(res => {
//   console.log('潘：',formatNumber(res))
// })
axios.get('https://explore.veforge.com/api/accounts/0x54E62208B91e2e37199A32279062182f3Ed202f8/tokenBalances').then(res => {
  console.log('medy：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0xF21843291B92766E2926550B4BEBd44Db25d661E/tokenBalances').then(res => {
  console.log('男哥：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0xf8bd3A03D7Fe10c6a7573E2cAC00eD61aF0d725A/tokenBalances').then(res => {
  console.log('同：',formatNumber(res))
})
// axios.get('https://explore.veforge.com/api/accounts/0xcb8108b14DC16c3eccB7702acb3e4d32FBfa6FD2/tokenBalances').then(res => {
//   console.log('浩然：',formatNumber(res))
// })
axios.get('https://explore.veforge.com/api/accounts/0xfb69DBD1aE7Daaf46E5C5B480348be0D7A5Dfc26/tokenBalances').then(res => {
  console.log('ck：',formatNumber(res))
})
// axios.get('https://explore.veforge.com/api/accounts/0xe022982f41b7ce46Ee8CA0A753595bFd5b7D8127/tokenBalances').then(res => {
//   console.log('大象：',formatNumber(res))
// })
// axios.get('https://explore.veforge.com/api/accounts/0xA5C237aB34cE176e0EAb7cD1408cc85217E75753/tokenBalances').then(res => {
//   console.log('庄：',formatNumber(res))
// })
// axios.get('https://explore.veforge.com/api/accounts/0x007C33951cB8A5FeDB3D1AB93de29b266f514B6d/tokenBalances').then(res => {
//   console.log('旭：',formatNumber(res))
// })
// axios.get('https://explore.veforge.com/api/accounts/0xa2A97eBBDd1eaD696A82D3135A627D84Cf8ba178/tokenBalances').then(res => {
//   console.log('哲：',formatNumber(res))
// })
axios.get('https://explore.veforge.com/api/accounts/0xF6F4FabefA1A7d1822c489241AC5b472f857ee11/tokenBalances').then(res => {
  console.log('r何超：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0x5E4c490A48A1c584AA1ca4D60D8E749F20bBa75F/tokenBalances').then(res => {
  console.log('r博：',formatNumber(res))
})
axios.get('https://explore.veforge.com/api/accounts/0xf065d61F542ACF22234E1333a7c476Ec2435DE77/tokenBalances').then(res => {
  console.log('r燕：',formatNumber(res))
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

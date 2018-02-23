// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$configKomercia = null

Vue.prototype.$urlHttp = 'https://api.komercia.co'

const getCookie = (cname) => {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return 'JGlFKnCJ4eZCaOOn87fmQtP8Txoj336wk7UEARJ5'
}

const authData = getCookie('authData')
if (authData) {
  const config = {
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authData}`,
      'Access-Control-Allow-Origin': '*'
    }
  }
  axios.get(`https://api.komercia.co/api/user/data`, config).then((response) => {
    store.state.userData = response.data.usuario
  })
}

store.commit('getData')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})

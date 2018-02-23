import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tienda: {},
    userData: {},
    envios: {},
    banners: [],
    urlHttp: '',
    totalCart: 0,
    productos: [],
    categorias: [],
    subcategorias: [],
    currentProduct: {},
    notifyProduct: null,
    togglePayment: false,
    menuComponent: false,
    geolocalizacion: null,
    orderComponent: false,
    existCurrentProduct: false,
    productsPlaceholder: [
      {
        placeholder: true,
        foto: 'placeholder1.svg',
        nombre: 'Nombre del producto',
        precio: '14999'
      }, {
        placeholder: true,
        foto: 'placeholder2.svg',
        nombre: 'Nombre del producto',
        precio: '14999'
      }, {
        placeholder: true,
        foto: 'placeholder3.svg',
        nombre: 'Nombre del producto',
        precio: '14999'
      }, {
        placeholder: true,
        foto: 'placeholder4.svg',
        nombre: 'Nombre del producto',
        precio: '14999'
      }
    ],
    beforeCombination: [],
    mediospago: {
      epayco: false
    },
    politicas: {
      garantia: '',
      datos: ''
    }
  },
  mutations: {
    getData (state) {
      axios.get(`https://api.komercia.co/api/front/tienda/354`).then((response) => {
        state.banners = response.data.data.banners
        state.productos = response.data.data.productos
        state.categorias = response.data.data.categorias
        state.subcategorias = response.data.data.subcategorias
        state.geolocalizacion = response.data.data.geolocalizacion
        state.mediospago = response.data.data.medios_pago || { epayco: false }
        state.politicas = response.data.data.politicas || { garantia: '', datos: '' }
        state.tienda = response.data.data.tienda
        state.envios = response.data.data.medios_envio
        state.envios.valores = JSON.parse(response.data.data.medios_envio.valores)
      })
    }
  }
})

import Chat from './components/KomerciaChat'

const components = [
  Chat
]

const modules = {}
modules.install = (Vue) => {
  for (const component of components) {
    Vue.component(component.name, component)
  }
}

export default modules

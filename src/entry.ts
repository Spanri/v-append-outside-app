import { VueConstructor } from 'vue';

import directive from './directive/index'

const plugin = {
  install(Vue: VueConstructor) {
    Vue.directive('append-outside-app', directive)
  },
  directive,
}

export default plugin


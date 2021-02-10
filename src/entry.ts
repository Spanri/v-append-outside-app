import { VueConstructor } from 'vue';

import directive from './directive/index'

const plugin = {
  install(Vue: VueConstructor) {
    Vue.directive('moving-panels', directive)
  },
  directive,
}

export default plugin


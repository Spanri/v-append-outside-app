import Vue, { VNode } from 'vue';
import Example from './Example.vue';

Vue.config.productionTip = false;

import vMovingPanelsDirective from '@/entry.ts';
Vue.use(vMovingPanelsDirective)

new Vue({
  render: (h): VNode => h(Example),
}).$mount('#app');

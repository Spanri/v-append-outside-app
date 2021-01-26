import Vue, { VNode } from 'vue';
import Example from './Example.vue';

Vue.config.productionTip = false;

import vAppendOutsideAppDirective from '@/entry.ts';
Vue.use(vAppendOutsideAppDirective)

new Vue({
  render: (h): VNode => h(Example),
}).$mount('#app');

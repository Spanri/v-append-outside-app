import { VNode } from "vue";

 type HandleType = Vue | HTMLElement;

 interface AppendBindingsValue {
    handle?: HandleType;
}

 interface AppendBindings  {
	value?: AppendBindingsValue;
}

export default {
    bind: (el: HTMLElement, binding: AppendBindings, vnode: VNode, oldVnode: VNode) => {
      console.log("bind", el, binding, vnode, oldVnode)  
    },
    update: () => {
        console.log("update")  
    },
    unbind: () => {
        console.log("unbind")  
    },
  }
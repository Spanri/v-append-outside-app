// import { VNode } from "vue";
import "./style.scss";

type HandleType = Vue | HTMLElement;

interface AppendBindingsValue {
  handle?: HandleType;
}

interface AppendBindings {
  value?: AppendBindingsValue;
}

class CustomElement extends HTMLElement {
  constructor() {
    super();
  }

  isMoving?: boolean;
  startX?: number;
  startPrevWidth?: number;
  startNextWidth?: number;
  movingDiff?: number;
}

const addEvents = (el: CustomElement) => {
  window.addEventListener("mousedown", (event) => {
    el.isMoving = true;
    el.startX = event.screenX;

    if (el.previousSibling instanceof HTMLElement) {
      const prevSizes: ClientRect = el.previousSibling.getBoundingClientRect();
      el.startPrevWidth = prevSizes.width;
    }

    if (el.nextSibling instanceof HTMLElement) {
      const nextSizes: ClientRect = el.nextSibling.getBoundingClientRect();
      el.startNextWidth = nextSizes.width;
    }

    el.movingDiff = 0;
  });

  window.addEventListener("mouseup", (event) => {
    el.isMoving = false;
    el.startX = event.screenX;
  });

  el.addEventListener("mousedown", (event: any) => {
    el.isMoving = true;
    el.startX = event.screenX;
    console.log("down", event);
  });

  el.addEventListener("mousemove", (event: any) => {
    if (el.isMoving && el.startX) {
      const movingDiff = event.screenX - el.startX;

      // console.log("move", movingDiff, el.previousSibling, el.nextSibling);

      if (el.previousSibling instanceof HTMLElement && el.startPrevWidth) {
        const newPrevWidth = `${el.startPrevWidth + movingDiff}px`;

        console.log({
          old: el.startPrevWidth,
          newPrevWidth,
          diff: movingDiff,
        });

        el.previousSibling.style.width = newPrevWidth;
      }

      if (el.nextSibling instanceof HTMLElement && el.startNextWidth) {
        const newNextWidth = `${el.startNextWidth - movingDiff}px`;
        el.nextSibling.style.width = newNextWidth;
      }

      // console.log({ movingDiff });
    }
  });

  el.addEventListener("mouseup", (event: any) => {
    el.isMoving = false;
    el.startX = event.screenX;
    console.log("up", event);
  });
};

const createSplitBlock = () => {
  const splitBlock: HTMLElement = document.createElement("div");
  splitBlock.innerHTML = "<p>Split</p>";
  splitBlock.classList.add("v-splitter");
  addEvents(splitBlock as HTMLElement);

  return splitBlock;
};

const addSplitBlocks = (el: HTMLElement) => {
  for (let i = 0; i < el.childNodes.length - 1; i += 2) {
    const splitNode: ChildNode = createSplitBlock();
    const childNode: ChildNode = el.childNodes[i];

    if ((<HTMLElement>childNode).classList.contains("v-splitter-after")) {
      childNode.parentNode!.insertBefore(splitNode, childNode.nextSibling);
    }
  }
};

export default {
  bind: (
    el: HTMLElement,
    binding: AppendBindings
    // vnode: VNode,
    // oldVnode: VNode
  ) => {
    console.log("binding", binding.value);

    addSplitBlocks(el);
  },
  update: () => {
    console.log("update");
  },
  unbind: () => {
    console.log("unbind");
  },
};

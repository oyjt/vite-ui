import { App } from "vue";

import vButton from "./button/index.vue";

export {
  vButton,
};

const components = [vButton];

export function registerJwUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerJwUi;
import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@nds-ui-app/nds-ui",
  app: () => System.import("http://localhost:8001/js/app.js"),
  activeWhen: "/",
});

registerApplication({
  name: "@nds-ui-app/cashdeposit",
  app: () => System.import("http://localhost:8002/js/app.js"),
  activeWhen: "/cashdeposit",
});

start();

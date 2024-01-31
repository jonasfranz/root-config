import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vue-mf/navbar",
  app: () => System.import("@vue-mf/navbar"),
  activeWhen: "/",
  customProps: {
    githubLink: "https://github.com/vue-microfrontends/root-config",
  },
});

registerApplication({
  name: "@orts/sspa",
  app: () => System.import("@orts/sspa"),
  activeWhen: "/view-doggos",
});

registerApplication({
  name: "@vue-mf/rate-dogs",
  app: () => System.import("@vue-mf/rate-dogs"),
  activeWhen: "/rate-doggos",
});

start();

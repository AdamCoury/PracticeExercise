import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/app.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library, Library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faEnvelope,
  faKey,
  faLock,
  faUser
} from "@fortawesome/free-solid-svg-icons";

library.add(faCircle, faEnvelope, faUser, faKey, faLock);
Vue.component("fa-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

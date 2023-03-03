import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";

import "primevue/resources/primevue.min.css  ";
import "primeicons/primeicons.css";
import "primevue/resources/themes/bootstrap4-light-purple/theme.css";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

// import "./assets/main.css";

const app = createApp(App);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Toast", Toast);
app.use(PrimeVue);
app.use(ToastService);
app.mount("#app");

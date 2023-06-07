import WaveUI from "wave-ui";
import "wave-ui/dist/wave-ui.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WaveUI);
});

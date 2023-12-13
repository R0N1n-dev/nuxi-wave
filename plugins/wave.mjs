import WaveUI from "wave-ui";
import "wave-ui/dist/wave-ui.css";
import "boxicons/css/boxicons.min.css";
import "boxicons/css/animations.css";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WaveUI);
});

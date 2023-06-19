import { createApp } from "./xiaoye";
import TestA from "./components/TestA";
import TestB from "./components/TestB";

const app = createApp({
  components: [TestA, TestB]
});
app.mount("#app");

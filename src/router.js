import { createRouter, createWebHistory } from "vue-router";
import Form from './views/form.vue';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Form,
    }
  ],
});
export default router;
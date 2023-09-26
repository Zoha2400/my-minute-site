import { createRouter, createWebHistory } from 'vue-router';
import WhoCanUseVue from '@/components/WhoCanUse.vue';
import MyProjectsVue from '@/components/MyProjects.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: WhoCanUseVue},
    {path: '/projects', component: MyProjectsVue}
  ]
})

export default router

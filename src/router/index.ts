import { createRouter, createWebHistory } from 'vue-router';
import WhoCanUseVue from '@/components/WhoCanUse.vue';
import MyProjectsVue from '@/components/MyProjects.vue';
import NavBarProj from '@/components/NavBarProj.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', components: {
      default: WhoCanUseVue,
    }},
    {path: '/projects', components: {
      default: MyProjectsVue,
      navbar: NavBarProj,
    }}
  ]
})

export default router

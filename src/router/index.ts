import { createRouter, createWebHistory } from 'vue-router';
import WhoCanUseVue from '@/components/WhoCanUse.vue';
import MyProjectsVue from '@/components/MyProjects.vue';
import NavBarProj from '@/components/NavBarProj.vue';
import NavManu from '@/components/NavMenu.vue';
import RegPageVue from '@/components/RegPage.vue';
import LogPageVue from '@/components/LogPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', components: {
      default: WhoCanUseVue,
      navbar: NavManu,
    }},
    {path: '/projects', components: {
      default: MyProjectsVue,
      navbar: NavBarProj,
    }},
    {path: '/reg', component: RegPageVue},
    {path: '/login', component: LogPageVue}
  ],
  })

export default router

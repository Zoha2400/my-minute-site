import { createRouter, createWebHistory } from 'vue-router';
import WhoCanUseVue from '@/components/WhoCanUse.vue';
import MyProjectsVue from '@/components/MyProjects.vue';
import NavBarProj from '@/components/NavBarProj.vue';
import NavManu from '@/components/NavMenu.vue';
import RegPageVue from '@/components/RegPage.vue';
import LogPageVue from '@/components/LogPage.vue';
import RegLogBarVue from '@/components/RegLogBar.vue';
import MyAccountVue from '@/components/MyAccount.vue';
import MyAccountNavVue from '@/components/MyAccountNav.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home',components: {
      default: WhoCanUseVue,
      navbar: NavManu,
    }},
    {path: '/projects', name: 'projects', components: {
      default: MyProjectsVue,
      navbar: NavBarProj,
    }},
    {path: '/reg',name: 'registration', components: {
      default: RegPageVue,
      navbar: RegLogBarVue,
    }},
    {path: '/login', name: 'login', components: {
      default: LogPageVue,
      navbar: RegLogBarVue,
    }},
    {path: '/account', name: 'account', components: {
      default: MyAccountVue,
      navbar: MyAccountNavVue,
    }},
    
  ],
  })

export default router

import { createRouter, createWebHistory } from "vue-router";
import Acceuil from '@/components/Acceuil.vue';
import Cours from '@/components/cours.vue';
import Information from '@/components/information.vue';

const routes = [
  { path: '/acceuil', component: Acceuil }, // Assure-toi que l'URL correspond
  { path: '/cours', component: Cours },
  { path: '/information', component: Information }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

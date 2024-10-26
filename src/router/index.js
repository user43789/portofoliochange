import { createRouter, createWebHistory } from 'vue-router';
import Acceuil from '@/components/Acceuil.vue';
import Information from '@/components/information.vue';
import Cours from '@/components/cours.vue';
import Erreur from '@/components/erreur.vue'

const routes = [
    { path: '/', redirect: '/Acceuil' }, 
    { path: '/Acceuil', component: Acceuil },
    { path: '/Information', component: Information },
    { path: '/cours', component: Cours },
    { path: '/Erreur', component: Erreur }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import SignupForm from '../views/SignupForm.vue';
import Dashboard from '../views/Dashboard.vue';
import CompleteAssignments from '../views/CompleteAssignments.vue';
import MissingAssignments from '../views/MissingAssignments.vue';
import ExtraCreditAssignments from '../views/ExtraCreditAssignments.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupForm,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'complete-assignments',
        name: 'CompleteAssignments',
        component: CompleteAssignments,
      },
      {
        path: 'missing-assignments',
        name: 'MissingAssignments',
        component: MissingAssignments,
      },
      {
        path: 'extra-credit-assignments',
        name: 'ExtraCreditAssignments',
        component: ExtraCreditAssignments,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
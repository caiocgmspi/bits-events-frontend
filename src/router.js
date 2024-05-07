import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/components/pages/HomeView.vue'
import EventView from './components/pages/events/EventView.vue'
import ListEvents from './components/pages/events/ListEvents.vue'
import CreateEventView from './components/pages/events/CreateEventView.vue'
import ListAccounts from './components/pages/accounts/ListAccounts.vue'
import CreateAccount from './components/pages/accounts/CreateAccount.vue'
import ViewAccount from './components/pages/accounts/ViewAccount.vue'
import ListBuildings from './components/pages/buildings/ListBuildings.vue'
import CreateBuilding from './components/pages/buildings/CreateBuilding.vue'
import LoginView from './components/pages/LoginView.vue'
import MyAccount from './components/pages/MyAccount.vue'
import ViewEvents from './components/pages/events/ViewEvents.vue'
import RecoveryAccount from './components/pages/accounts/RecoveryAccount.vue'

const routes = [
  { path: '/', component: HomeView },

  { path: '/events/', component: ListEvents},
  { path: '/events/create', component: CreateEventView},
  { path: '/events/:id/view', component: EventView},
  { path: '/events/:id/cep/alter', component: CreateEventView},

  { path: '/accounts/', component: ListAccounts},
  { path: '/accounts/create', component: CreateAccount},
  { path: '/accounts/:id/alter', component: CreateAccount},
  { path: '/accounts/:id/details', component: ViewAccount},
  { path: '/my-account/recovery', component: RecoveryAccount},

  { path: '/events/:id/details', component: ViewEvents},

  { path: '/companies/', component: ListBuildings},
  { path: '/companies/create', component: CreateBuilding},
  { path: '/companies/:id/alter', component: CreateBuilding},

  { path: '/my-account', component: MyAccount},

  { path: '/login', component: LoginView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
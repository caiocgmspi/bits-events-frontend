import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/components/pages/HomeView.vue'
import EventView from './components/pages/events/EventView.vue'
import ListEvents from './components/pages/events/ListEvents.vue'
import CreateEventView from './components/pages/events/CreateEventView.vue'
import ListAccounts from './components/pages/accounts/ListAccounts.vue'
import CreateAccount from './components/pages/accounts/CreateAccount.vue'
import ListBuildings from './components/pages/buildings/ListBuildings.vue'
import CreateBuilding from './components/pages/buildings/CreateBuilding.vue'

const routes = [
  { path: '/', component: HomeView },

  { path: '/events/', component: ListEvents},
  { path: '/events/create', component: CreateEventView},
  { path: '/events/:id/view', component: EventView},
  { path: '/events/:id/alter', component: CreateEventView},

  { path: '/accounts/', component: ListAccounts},
  { path: '/accounts/create', component: CreateAccount},
  { path: '/accounts/:id/alter', component: CreateAccount},

  { path: '/buildings/', component: ListBuildings},
  { path: '/buildings/create', component: CreateBuilding},
  { path: '/buildings/:id/alter', component: CreateBuilding},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
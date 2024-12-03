// @ts-nocheck
// routes.js
import Home from './pages/Home.svelte';
import Login from './pages/Login.svelte';

export const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
];

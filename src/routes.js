// @ts-nocheck
// routes.js
import Home from './pages/Home.svelte';
import Login from './pages/Login.svelte';
import Students from './pages/Students.svelte';
import Teachers from './pages/Teachers.svelte';
import Classes from './pages/Classes.svelte';
import Attendance from './pages/Attendance.svelte';

export const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/students', component: Students },
  { path: '/teachers', component: Teachers },
  { path: '/classes', component: Classes },
  { path: '/attendances', component: Attendance },
];

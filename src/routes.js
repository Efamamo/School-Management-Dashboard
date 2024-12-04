// @ts-nocheck
// routes.js
import Home from './pages/Home.svelte';
import Login from './pages/Login.svelte';
import Students from './pages/Students.svelte';
import Teachers from './pages/Teachers.svelte';
import Classes from './pages/Classes.svelte';
import Attendance from './pages/Attendance.svelte';
import Grades from './pages/Grade.svelte';
import Events from './pages/Events.svelte';
import AddStudent from './pages/AddStudent.svelte';
import AddTeacher from './pages/AddTeacher.svelte';
import AddClass from './pages/AddClass.svelte';

export const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/students', component: Students },
  { path: '/teachers', component: Teachers },
  { path: '/classes', component: Classes },
  { path: '/attendances', component: Attendance },
  { path: '/grades', component: Grades },
  { path: '/events', component: Events },
  { path: '/students/add', component: AddStudent },
  { path: '/teachers/add', component: AddTeacher },
  { path: '/classes/add', component: AddClass },
];

import { writable } from 'svelte/store';

export const SchoolStore = writable({
  students: [],
  teachers: [],
  classes: [],
  grades: [],
  attendances: [],
  events: [],
});

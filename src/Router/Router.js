// external imports
import { createRouter, createWebHistory } from "vue-router";

// create routing for vue
import Customer from "../views/Customer.vue";
import Dashboard from "../views/Dashboard.vue";
import Employee from "../views/Employee.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/employee", name: "Employe", component: Employee },
  { path: "/customer", name: "Customer", component: Customer },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

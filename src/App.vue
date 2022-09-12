<template>
  <Customer />
  <Employee />
</template>

<script>
import Customer from "./components/Customer.vue";
import Employee from "./components/Employee.vue";
export default {
  components: { Customer, Employee },
};
</script>

<style>
@import "./style.css";
</style>

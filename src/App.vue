<template>
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <router-link class="m-2" to="/">Home</router-link>
    <router-link class="m-2" to="/employee">Employee</router-link>
    <router-link class="m-2" to="/customer">Customer</router-link>
    <router-link class="m-2" to="/dashboard">Dashboard</router-link>
  </p>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import "./style.css";
</style>

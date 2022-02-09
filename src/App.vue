<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <SimpleAuthForm />
</template>

<script>
import SimpleAuthForm from "./components/SimpleAuthForm.vue";

export default {
  name: "App",
  components: {
    SimpleAuthForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

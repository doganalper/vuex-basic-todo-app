<template>
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
  </div>
</template>

<script>
import HeaderComp from "./components/header";
import ContentComp from "./components/content";
export default {
  name: "app",
  components: {
    appHeader: HeaderComp,
    appContent: ContentComp
  },
  data() {
    return {
      todos: null
    };
  },
  created() {
    this.todos = this.$store.getters.getTodos;
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>

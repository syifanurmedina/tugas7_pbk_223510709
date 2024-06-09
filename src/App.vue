<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList
  }
};
</script>

<style>
#app {
  background-color: pink;
  color: #333;
  font-family: Arial, sans-serif;
  padding: 20px;
  min-height: 100vh;
}
</style>

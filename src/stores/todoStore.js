import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(todo) {
      this.todos.push({ text: todo, completed: false });
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleTodoCompletion(index) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  },
  getters: {
    incompleteTodosCount: (state) => {
      return state.todos.filter(todo => !todo.completed).length;
    },
    incompleteTodos: (state) => {
      return state.todos.filter(todo => !todo.completed);
    },
    completedTodos: (state) => {
      return state.todos.filter(todo => todo.completed);
    }
  }
});

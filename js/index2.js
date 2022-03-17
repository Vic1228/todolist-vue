var app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [
      {
        id: "123",
        title: "待辦事項1",
        completed: true,
      },
    ],
    visibility: "all",
    cacheTodo: {},
    cacheTitle: "",
  },
  methods: {
    addTodo: function () {
      var value = this.newTodo.trim();
      var timeStamp = Math.floor(Date.now());
      if (!value) {
        return;
      }
      this.todos.push({
        id: timeStamp,
        title: value,
        completed: false,
      });
      this.newTodo = "";
    },
    removeTodo: function (todo) {
      var vm = this;
      var newIndex = vm.todos.findIndex(function (item, key) {
        return todo.id === item.id;
      });
      this.todos.splice(newIndex, 1);
    },
    editTodo: function (item) {
      console.log(item);
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
    cancelEdit: function () {
      this.cacheTodo = {};
    },
    doneEdit: function (item) {
      item.title = this.cacheTitle;
      this.cacheTitle = "";
      this.cacheTodo = {};
    },
    removeAll: function () {
      this.todos = [];
    },
  },
  computed: {
    filteredTodos: function () {
      if (this.visibility == "all") {
        return this.todos;
      } else if (this.visibility == "active") {
        var newTodos = [];
        this.todos.forEach(function (item) {
          if (!item.completed) {
            newTodos.push(item);
          }
        });
        return newTodos;
      } else if (this.visibility == "completed") {
        var newTodos = [];
        this.todos.forEach(function (item) {
          if (item.completed) {
            newTodos.push(item);
          }
        });
        return newTodos;
      }
    },
    undoneTodos: function () {
      return this.todos.filter((todo) => todo.completed != true);
    },
  },
});

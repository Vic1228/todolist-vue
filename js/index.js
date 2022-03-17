var vm = new Vue({
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

    cacheTodo: {},
    cacheTitle: "",
  },
  methods: {
    addTodo: function () {
      var value = this.newTodo.trim(); //trim() > 消除前後空白
      var timeStamp = Math.floor(Date.now());
      if (!value) {
        return;
      }
      this.todos.push({
        id: timeStamp,
        title: value,
        computed: false,
      });
      this.newTodo = "";
    },

    removeTodo: function (todo) {
      var newIndex = "";
      var vm = this;
      vm.todos.forEach(function (item, key) {
        if (todo.id === item.id) {
          newIndex = key;
        }
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
  },
});

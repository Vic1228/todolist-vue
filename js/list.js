$("#example1").progress({
  percent: 99,
});

$(".d1").mouseover(() => {
  $(".d1").toggleClass("d1 d1A animating transition jiggle");
  setTimeout(() => {
    $(".d1A").toggleClass("d1 d1A animating transition jiggle");
  }, 800);
});
$(".d1 , .d1A")
  .mouseover(() => {
    $(".d1 , .d1A").css("color", "#08fdd8");
  })
  .mouseout(() => {
    $(".d1 , .d1A").css("color", "#fff");
  });

$(".d2").mouseover(() => {
  $(".d2").toggleClass("d2 d2A animating transition jiggle");
  setTimeout(() => {
    $(".d2A").toggleClass("d2 d2A animating transition jiggle");
  }, 800);
});
$(".d2 , .d2A")
  .mouseover(() => {
    $(".d2 , .d2A").css("color", "#08fdd8");
  })
  .mouseout(() => {
    $(".d2 , .d2A").css("color", "#fff");
  });

$(".d3").mouseover(() => {
  $(".d3").toggleClass("d3 d3A animating transition jiggle");
  setTimeout(() => {
    $(".d3A").toggleClass("d3 d3A animating transition jiggle");
  }, 800);
});
$(".d3 , .d3A")
  .mouseover(() => {
    $(".d3 , .d3A").css("color", "#08fdd8");
  })
  .mouseout(() => {
    $(".d3 , .d3A").css("color", "#fff");
  });

$(".d4").mouseover(() => {
  $(".d4").toggleClass("d4 d4A animating transition jiggle");
  setTimeout(() => {
    $(".d4A").toggleClass("d4 d4A animating transition jiggle");
  }, 800);
});
$(".d4 , .d4A")
  .mouseover(() => {
    $(".d4 , .d4A").css("color", "#08fdd8");
  })
  .mouseout(() => {
    $(".d4 , .d4A").css("color", "#fff");
  });

$(".d5").mouseover(() => {
  $(".d5").toggleClass("d5 d5A animating transition jiggle");
  setTimeout(() => {
    $(".d5A").toggleClass("d5 d5A animating transition jiggle");
  }, 800);
});
$(".d5 , .d5A")
  .mouseover(() => {
    $(".d5 , .d5A").css("color", "#08fdd8");
  })
  .mouseout(() => {
    $(".d5 , .d5A").css("color", "#fff");
  });

$(".d6").mouseover(() => {
  $(".d6").toggleClass("d6 d6A animating transition jiggle");
  setTimeout(() => {
    $(".d6A").toggleClass("d6 d6A animating transition jiggle");
  }, 800);
});
$(".d6 , .d6A")
  .mouseover(() => {
    $(".d6 , .d6A").css("color", "#08fdd8");
  })
  .mouseout(() => {
    $(".d6 , .d6A").css("color", "#fff");
  });

$(".d7").mouseover(() => {
  $(".d7").toggleClass("d7 d7A animating transition jiggle");
  setTimeout(() => {
    $(".d7A").toggleClass("d7 d7A animating transition jiggle");
  }, 800);
});
$(".d7 , .d7A")
  .mouseover(() => {
    $(".d7 , .d7A").css("color", "#08fdd8");
  })
  .mouseout(() => {
    $(".d7 , .d7A").css("color", "#fff");
  });

$(".d8").mouseover(() => {
  $(".d8").toggleClass("d8 d8A animating transition jiggle");
  setTimeout(() => {
    $(".d8A").toggleClass("d8 d8A animating transition jiggle");
  }, 800);
});
$(".d8 , .d8A")
  .mouseover(() => {
    $(".d8 , .d8A").css("color", "#08fdd8");
  })
  .mouseout(() => {
    $(".d8 , .d8A").css("color", "#fff");
  });

var test = [];

var Localdata = localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList"))
  : {
      id: [],
      title: [],
      text: [],
    };

function reflashTodos(Title, Text, Id) {
  if (Id != null) {
    Localdata.id.push(Id);
    Localdata.title.push(Title);
    Localdata.text.push(Text);
    localStorage.setItem("todoList", JSON.stringify(Localdata));
  }
  if (JSON.parse(localStorage.getItem("todoList")) != null) {
    for (
      i = 0;
      i < JSON.parse(localStorage.getItem("todoList")).id.length;
      i++
    ) {
      test[i] = {
        id: JSON.parse(localStorage.getItem("todoList")).id[i],
        title: JSON.parse(localStorage.getItem("todoList")).title[i],
        text: JSON.parse(localStorage.getItem("todoList")).text[i],
        completed: true,
      };
    }
  }
}

function removeTodo(Id, title, text) {
  Localdata.id.splice(Localdata.id.indexOf(Id), 1);
  Localdata.title.splice(Localdata.title.indexOf(title), 1);
  Localdata.text.splice(Localdata.text.indexOf(text), 1);
  localStorage.setItem("todoList", JSON.stringify(Localdata));
}

function editTodo(title, text, newTitle, newText) {
  Localdata.title.splice(Localdata.title.indexOf(title), 1, newTitle);
  Localdata.text.splice(Localdata.text.indexOf(text), 1, newText);
  localStorage.setItem("todoList", JSON.stringify(Localdata));
}

reflashTodos();

var vm = new Vue({
  el: "#app",
  data: {
    newTitle: "??????",
    newText: "??????",
    todos: test,
    cacheTodo: {},
    cacheTitle: "",
    cacheText: "",
    oldTitle: "",
    oldText: "",
  },

  methods: {
    addTodo: function () {
      var valueTitle = this.newTitle.trim();
      var valueText = this.newText.trim();
      var valueId = Math.floor(Date.now());
      if (!valueTitle) {
        return;
      }
      reflashTodos(valueTitle, valueText, valueId);
      this.newTitle = "??????";
      this.newText = "??????";
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
      removeTodo(todo.id, todo.title, todo.text);
    },
    editTodo: function (item) {
      this.cacheTodo = item;
      this.cacheTitle = item.title;
      this.cacheText = item.text;
      oldTitle = this.cacheTitle;
      oldText = this.cacheText;
    },
    cancelEdit: function () {
      this.cacheTodo = {};
    },
    doneEdit: function (item) {
      item.title = this.cacheTitle;
      item.text = this.cacheText;
      this.cacheTitle = "";
      this.cacheText = "";
      this.cacheTodo = {};
      console.log(oldTitle);
      editTodo(oldTitle, oldText, item.title, item.text);
    },
  },
});

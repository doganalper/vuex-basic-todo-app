import { eventBus } from "../main";

export const addTodo = (state, payload) => {
  let todo = {};
  const count = state.todos.length;
  todo.id = count + 1;
  todo.title = payload.title;
  todo.text = payload.text;
  todo.todoState = "Pending";
  state.todos.push(todo);
  eventBus.$emit("added", todo);
};

export const deleteTodo = (state, payload) => {
  const index = state.todos.findIndex(i => i.id === payload.id);
  state.todos.splice(index, 1);
  eventBus.$emit("deleted", true);
};

export const doneTodo = (state, payload) => {
  const index = state.todos.findIndex(i => i.id === payload.id);
  state.todos[index].todoState = "Done";
  console.log(state.todos);
  eventBus.$emit("finished", true);
};

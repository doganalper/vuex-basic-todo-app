export const getTodos = state => state.todos;
export const getPending = state => {
  return state.todos.filter(i => i.todoState === "Pending");
};
export const getDone = state => {
  return state.todos.filter(i => i.todoState === "Done");
};

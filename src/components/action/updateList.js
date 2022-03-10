export const ADD = "ADD";
export const EDIT = "EDIT";
export const DELETE = "DELETE";

export function addTodo(task) {
  return {
    type: ADD,
    payload: task,
  };
}
export function editTodo(index, task) {
  return {
    type: EDIT,
    payload: task,
    index: index,
  };
}
export function deleteTodo(index) {
  return {
    type: DELETE,
    payload: index,
  };
}

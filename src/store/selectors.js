import { createSelector } from "@reduxjs/toolkit";

export const selectAllTodos = (state) => state.todos.todos;
export const selectActiveFilter = (state) => state.filters;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodos, filterTodos) => {
    switch (filterTodos) {
      case "all":
        return allTodos;
      case "active":
        return allTodos.filter((todo) => !todo.completed);
      case "completed":
        return allTodos.filter((todo) => todo.completed);
    }
  }
);

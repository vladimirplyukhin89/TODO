import todoReducer, {
  addTodo,
  removeTodo,
  toggleTodoComplete,
} from "../store/todoSlice";

describe("todoSlice", () => {
  //  it("should return default state when passed an empty action", () => {
  //    const result = todoReducer(undefined, { type: "" });

  //    expect(result).toEqual([]);
  //  });

  it('should add new todo item with "addTodo" action', () => {
    const action = { type: addTodo.type, payload: "Test" };

    const result = todoReducer({}, action);

    //expect(result[0].text).toBe("Test");
    expect(result[0].todos.completed).toBe(false);
  });
});

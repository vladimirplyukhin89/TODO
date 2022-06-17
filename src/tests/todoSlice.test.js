import todoReducer from "../store/todoSlice";

describe("todoSlice", () => {
  it("should return default state when passed an empty action", () => {
    const result = todoReducer({ todos: [] }, { type: "" });

    expect(result).toEqual({ todos: [] });
  });
});

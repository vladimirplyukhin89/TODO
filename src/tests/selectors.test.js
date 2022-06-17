import { selectTodos } from "../store/selectors";

describe("redux selectors", () => {
  it("should select todos from state object", () => {
    const todos = [{ id: 123, text: "Test", completed: false }];
    const result = selectTodos({ todos });
    expect(result).toEqual(todos);
  });
});

import { Todo, TodoStatus } from "../types";
import { compareTodos } from "../utils/utils";

describe("TEST compareTodos function", () => {
  it("should return 0 given todo1 and todo2 have same status and title", () => {
    const todo1: Todo = {
      id: "1111",
      title: "todo title 1",
      description: "todo description 1",
      status: TodoStatus.PENDING,
    };
    const todo2: Todo = {
      id: "2222",
      title: "todo title 1",
      description: "todo description 2",
      status: TodoStatus.PENDING,
    };
    const result = compareTodos(todo1, todo2);
    expect(result).toBe(0);
  });

  it("should return 1 given todo1.title > todo2.title", () => {
    const todo1: Todo = {
      id: "1111",
      title: "title B",
      description: "todo description 1",
      status: TodoStatus.PENDING,
    };
    const todo2: Todo = {
      id: "2222",
      title: "Title A",
      description: "todo description 2",
      status: TodoStatus.PENDING,
    };
    const result = compareTodos(todo1, todo2);
    expect(result).toBe(1);
  });

  it("should return -1 given todo1.title < todo2.title", () => {
    const todo1: Todo = {
      id: "1111",
      title: "Title A",
      description: "todo description 1",
      status: TodoStatus.PENDING,
    };
    const todo2: Todo = {
      id: "2222",
      title: "Title B",
      description: "todo description 2",
      status: TodoStatus.PENDING,
    };
    const result = compareTodos(todo1, todo2);
    expect(result).toBe(-1);
  });

  it("should return 1 given todo1.status < todo2.status", () => {
    const todo1: Todo = {
      id: "1111",
      title: "Title A",
      description: "todo description 1",
      status: TodoStatus.DONE,
    };
    const todo2: Todo = {
      id: "2222",
      title: "Title B",
      description: "todo description 2",
      status: TodoStatus.PENDING,
    };
    const result = compareTodos(todo1, todo2);
    expect(result).toBe(1);
  });
});

import { Todo } from "../types";

/**
 * Compares two todos based on status and title
 * Used in the function Array.prototype.sort()
 * if -1, todo1 will be sorted before todo2
 * if 1, todo1 will be sorted after todo2
 * if 0, the order will not change
 * @param todo1
 * @param todo2
 * @returns -1 or 1 or 0
 */
export const compareTodos = (todo1: Todo, todo2: Todo) => {
  if (todo1.status === todo2.status && todo1.title === todo2.title) {
    return 0;
  }

  if (
    todo1.status < todo2.status ||
    (todo1.status === todo2.status && todo1.title > todo2.title)
  ) {
    return 1;
  }

  if (
    todo1.status > todo2.status ||
    (todo1.status === todo2.status && todo1.title < todo2.title)
  ) {
    return -1;
  }

  return 0;
};

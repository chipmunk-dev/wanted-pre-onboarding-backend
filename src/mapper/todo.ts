import { Todo, TodoResponse } from '../types/todo';

export const todoToTodoResponseDto = (todo: Todo) => {
  const todoResponse: TodoResponse = {
    todoId: todo.todo_id,
    memberId: todo.member_id,
    contents: todo.contents,
    createdAt: todo.created_at,
    modifiedAt: todo.modified_at,
  };

  return todoResponse;
};

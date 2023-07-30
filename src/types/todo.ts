export interface Todo {
  todo_id: number;
  member_id: number;
  contents: string;
  created_at: Date;
  modified_at: Date;
}

export interface TodoResponse {
  todoId: number;
  memberId: number;
  contents: string;
  createdAt: Date;
  modifiedAt: Date;
}

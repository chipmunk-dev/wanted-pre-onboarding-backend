import { Request, Response } from 'express';
import { promisePool } from '../config/db';
import { Todo } from '../types/todo';
import { todoToTodoResponseDto } from '../mapper/todo';
import { typeGuard } from '../util/typeGuard';

export const createTodo = async (request: Request, response: Response) => {
  const { contents } = request.body;
  const { member } = response.locals;

  try {
    const [_result] = await promisePool.query(
      `INSERT INTO todo(member_id, contents) VALUES ('${member.member_id}', '${contents}')`
    );

    return response.sendStatus(201);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error });
  }
};

export const getTodoList = async (request: Request, response: Response) => {
  try {
    const [result] = await promisePool.query(`SELECT * FROM TODO`);
    const todos = Array.isArray(result)
      ? (result as Todo[]).map((todo: Todo) => todoToTodoResponseDto(todo))
      : [];

    return response.status(200).json(todos);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error });
  }
};

export const getTodo = async (request: Request, response: Response) => {
  const { id } = request.params;

  try {
    const [result] = await promisePool.query(
      `SELECT * FROM TODO WHERE todo_id=${id}`
    );
    if (Array.isArray(result) && result[0]) {
      const todo = result[0];
      return response.status(200).json({ ...todo });
    } else {
      return response.status(400).json({ message: '잘못된 todo_id 입니다.' });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error });
  }
};

export const updateTodo = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { contents } = request.body;
  const { member } = response.locals;

  try {
    const [result] = await promisePool.query(
      `SELECT * FROM TODO WHERE todo_id=${id}`
    );
    if (Array.isArray(result) && result[0]) {
      const todo = result[0];
      if (typeGuard<Todo>(todo, 'todo_id')) {
        todo.contents = contents;

        if (todo.member_id !== member.member_id) {
          return response
            .status(400)
            .json({ message: '글 작성자가 아닙니다.' });
        }
      }

      await promisePool.query(
        `UPDATE todo SET contents='${contents}' WHERE todo_id=${id}`
      );
      return response.status(200).json({ ...todo });
    } else {
      return response.status(400).json({ message: '잘못된 todo_id 입니다.' });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error });
  }
};

export const deleteTodo = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { member } = response.locals;

  try {
    const [result] = await promisePool.query(
      `SELECT * FROM TODO WHERE todo_id=${id}`
    );
    if (Array.isArray(result) && result[0]) {
      const todo = result[0];
      if (typeGuard<Todo>(todo, 'todo_id')) {
        if (todo.member_id !== member.member_id) {
          return response
            .status(400)
            .json({ message: '글 작성자가 아닙니다.' });
        }
      }

      await promisePool.query(`DELETE FROM todo WHERE todo_id=${id}`);
      return response.sendStatus(204);
    } else {
      return response.status(400).json({ message: '잘못된 todo_id 입니다.' });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error });
  }
};

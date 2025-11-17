// TodoService.ts

import TodoTypes from "./todo";
import axios from 'axios';

const LOCAL_STORAGE_KEY = 'todos';

const API_BASE_URL = 'http://localhost:3000';

const TodoService = {
  async getTodos: (): Promise <TodoTypes[]> => {
  	try {
   	    const response = await axios.get<TodoTypes[]>(`${API_BASE_URL}/todos`);
            return response.data;
         } catch (error) {
              console.error('Error fetching users:', error);
              throw error; // Re-throw or handle as needed
          }
  },

  async addTodo: (text: string, dueDate: Date): TodoTypes => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = { id: todos.length + 1, task: text, dueDate:dueDate, completed: false };
  	try {
   	    const response = await axios.post<TodoTypes[]>(`${API_BASE_URL}/todos`, newTodo);
            return response.data;
         } catch (error) {
              console.error('error);
              throw error;
          }
  },

  async updateTodo: (todo: TodoTypes): TodoTypes => {
    const upadteTodo: TodoTypes = { task: todo.task, dueDate:todo.dueDate, completed: false };
    const todos = TodoService.getTodos();
  	try {
   	    const response = await axios.put<TodoTypes[]>(`${API_BASE_URL}/todos/`${todo.id}`, upadteTodo);
            return response.data;
         } catch (error) {
              console.error('error);
              throw error;
          }
  },

  async deleteTodo: (id: number): void => {
  	try {
   	    const response = await axios.delete<TodoTypes[]>(`${API_BASE_URL}/todos/`${todo.id}`);
            return response.data;
         } catch (error) {
              console.error('error);
              throw error;
          }
  },
};

export default TodoService;

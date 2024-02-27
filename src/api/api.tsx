import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const api = axios.create({
	baseURL: process.env.API_URL,
});

export type Todo = {
	id: number;
	title: string;
	description: string;
	created: string;
	deadline: string;
	completed: boolean;
};

export const createTodo = async (newTodo: { title: string; description: string; deadline: string }) => {
	try {
		const created = new Date().toISOString().split('T')[0];
		const todoListData = await api.get('/todos');
		const newId = `${(+todoListData.data.at(-1)?.id ?? 0) + 1}`;
		const response = await api.post('/todos', { ...newTodo, id: newId, created, completed: false });
		return response.data;
	} catch (error) {
		console.error('Failed to create todo:', error);
		throw error;
	}
};

export const getTodos = async (): Promise<Todo[]> => {
	const response = await api.get('/todos');
	return response.data.reverse();
};
export const getDetailTodo = async (id: number): Promise<Todo> => {
	const response = await api.get(`/todos/${id}`);
	return response.data;
};

export const editTodoItem = async ({ id, body }: { id: number; body: Partial<Todo> }) => {
	const response = await api.patch(`/todos/${id}`, body);
	return response.data;
};

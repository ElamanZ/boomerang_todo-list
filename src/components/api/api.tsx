import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:4000',
});


export type Todo = {
    id: number;
    title: string;
    description: string;
    createData: string;
    deadline: string;
    completed: string;
};
let nextId = parseInt(localStorage.getItem('nextId') || '1');

const generateId = () => {
    const id = nextId++;
    localStorage.setItem('nextId', nextId.toString()); // Сохранение нового значения nextId в локальное хранилище
    return id;
};

export const createTodo = async (newTodo: { title: string; description: string; deadline: string }) => {

    try {
        const id = generateId();
        const created = new Date().toISOString().split('T')[0]; // Получение только даты без времени
        const response = await api.post('/todos', { ...newTodo, id, created }); // Добавление ID и даты создания
        return response.data;
    } catch (error) {
        console.error('Failed to create todo:', error);
        throw error;
    }
};


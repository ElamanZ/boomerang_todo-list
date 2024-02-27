import React, { useState } from 'react';
import { Checkbox } from '~/components/ui/checkbox';
import { Button } from '~/components/ui/button';
import { getTodos, Todo } from '~/api/api';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import TodoItem from './todoItem';
import { useGetTodos } from '~/api/hooks/useGetTodos';

function Todos() {
	const [todoList, { isError, isPending, error }] = useGetTodos();

	if (isPending) return <div>Загрузка...</div>;
	if (isError) return <div>Ошибка: {error?.message}</div>;
	if (todoList?.length === 0) return <div> Список задач пуст </div>;

	return (
		<div className='mx-auto max-w-screen-sm'>
			{todoList?.map((todo: Todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</div>
	);
}

export default Todos;

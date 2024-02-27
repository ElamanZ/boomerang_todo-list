'use client';
import React, { useState } from 'react';
import { Todo } from '../../api/api';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import useEditTodo from '~/api/hooks/useEditTodo';
import Link from 'next/link';

const TodoItem = ({ todo }: { todo: Todo }) => {
	const [mutateTodo] = useEditTodo({ isRefreshTodoList: false });
	const [isChecked, setIsChecked] = useState<boolean>(todo.completed);

	const handleCheckboxChange = (checked: boolean) => {
		setIsChecked(checked);
		mutateTodo({ id: todo.id, body: { completed: checked } });
	};

	return (
		<div className='flex justify-between border border-gray-500 border-solid rounded-lg p-2 mt-3'>
			<label className='flex items-center'>
				<Checkbox id='terms' className='w-9 rounded-full h-9' onCheckedChange={handleCheckboxChange} checked={isChecked} />
				<label className={`ml-2 text-xl text-d ${isChecked ? 'line-through' : ''}`}>{todo.title}</label>
			</label>
			<div className='space-x-2.5'>
				<Link href={`/todo/${todo.id}`}>
					<Button>Detail</Button>
				</Link>
				<Link href={`/todo/update/${todo.id}`}>
					<Button>Edit</Button>
				</Link>
			</div>
		</div>
	);
};

export default TodoItem;

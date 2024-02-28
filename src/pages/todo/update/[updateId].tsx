import { useRouter } from 'next/router';
import { Button } from '~/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import React, {SyntheticEvent, useState} from 'react';
import { useGetTodo } from '~/api/hooks/useGetTodo';
import useEditTodo from '~/api/hooks/useEditTodo';

export default function Page() {
	const router = useRouter();
	const { updateId } = router.query;
	const [todo, query] = useGetTodo(+(updateId ?? 0));
	const [isDataChanged, setIsDataChanged] = useState<boolean>(false);

	const [mutate, queryEditTodo] = useEditTodo({ isRefreshTodoList: false });
	if (query.isPending) return <h1>Loading...</h1>;
	if (query.error || queryEditTodo.error)
		return (
			<h1>
				ERROR: {query.error?.message}
				{queryEditTodo.error?.message}
			</h1>
		);

	const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const dataToSend = Object.fromEntries(formData);
		if (todo?.id) mutate({ id: todo.id, body: dataToSend });
	};
	const handleInputChange = () => {
		setIsDataChanged(true);
	};
	return (
		<div className='mx-auto max-w-screen-sm p-8'>
			<Button variant='outline' size='icon' className='w-9 h-5' onClick={() => router.push('/todo')}>
				<ChevronLeft className='h-4 w-4' />
			</Button>
			<h1 className='mb-4 text-xl font-bold'>Вы можете изменить задачу</h1>
			<form onSubmit={handleSubmit} className='w-full space-y-2.5'>
				<Input type='text' placeholder='Заголовок' name='title' defaultValue={todo?.title} onChange={handleInputChange}/>
				<Textarea placeholder='Описание' name='description' defaultValue={todo?.description} onChange={handleInputChange}/>
				<div className='w-1/4'>
					<div className='mb-1'>Дедлайн</div>
					<Input className='flex' type='date' name='deadline' defaultValue={todo?.deadline} onChange={handleInputChange}/>
				</div>
				<Button type='submit' disabled={!isDataChanged} onClick={() => router.push('/todo')}>
					Изменить
				</Button>
			</form>
		</div>
	);
}

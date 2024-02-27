import { useRouter } from 'next/router';
import { Button } from '~/components/ui/button';
import React from 'react';
import { useGetTodo } from '~/api/hooks/useGetTodo';
import {ChevronLeft} from "lucide-react";

export default function TodoDetailPage() {
    const router = useRouter();
    const { todoId } = router.query;
    const [todo, query] = useGetTodo(+(todoId ?? 0));
    if (query.isPending) return <h1>Loading...</h1>;
    if (query.error) return <h1>ERROR: {query.error.message}</h1>;

    return (
        <div className='mx-auto max-w-screen-sm mt-10'>
            <Button variant='outline' size='icon' className='w-9 h-5' onClick={() => router.push('/todo')}>
                <ChevronLeft className='h-4 w-4' />
            </Button>
            <h1 className='mb-4'>Детали задачи</h1>
            <div className=' flex-col justify-between border border-gray-500 border-solid rounded-lg p-2'>
                <div className='flex items-center justify-between max-w-screen-sm mb-4'>
                    <label className='text-xl'>{todo?.title}</label>
                </div>
                <div className='text-black italic'>
                    <p>Описание:</p>
                    <span>{todo?.description}</span>
                </div>
                <span className='flex justify-between text-black text-xs mt-3'>
					<p className='bg-amber-400 border-solid rounded-lg pl-1 pr-1'>Deadline: {todo?.deadline}</p>
					<p>Created: {todo?.created}</p>
				</span>
            </div>
        </div>
    );
}

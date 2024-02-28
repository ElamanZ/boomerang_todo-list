import React, { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { createTodo, Todo } from '~/api/api';
import {useToast} from "~/components/ui/use-toast";

const Create: React.FC = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const { toast } = useToast();

    const mutation = useMutation<Todo, Error, { title: string; description: string; deadline: string }>({
        mutationFn: createTodo,
        onSuccess: () => {
            router.push('/todo');
            toast({
                title: 'Задача успешно создана!',
                variant: 'default',
            });
        },
        onError: error => {
            console.error('Failed to create todo:', error);
            toast({
                title: 'Ошибка при создании новой задачи!',
                variant: 'destructive',
            });
        },
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await mutation.mutateAsync({ title, description, deadline });
        } catch (error) {}
    };

    return (
        <div className='mx-auto max-w-screen-sm p-8'>
            <Button variant='outline' size='icon' className='w-11 h-7 mb-3' onClick={() => router.push('/todo')}>
                <ChevronLeft className='h-5 w-5' />
            </Button>
            <h1 className='mb-4 text-xl font-bold'>Пожалуйста создайте задачу</h1>
            <form className='w-full space-y-2.5' onSubmit={handleSubmit}>
                <Input required type='text' placeholder='Заголовок' value={title} onChange={e => setTitle(e.target.value)} />
                <Textarea required placeholder='Описание' value={description} onChange={e => setDescription(e.target.value)} />
                <div className='w-1/4'>
                    <div className='mb-1'>Дедлайн</div>
                    <Input
                        required
                        className='flex'
                        type='date'
                        placeholder='Заголовок'
                        value={deadline}
                        onChange={e => setDeadline(e.target.value)}
                    />
                </div>
                <Button type='submit'>Добавить</Button>
            </form>
        </div>
    );
};

export default Create;

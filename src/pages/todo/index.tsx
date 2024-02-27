import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import Todos from '~/components/todo/todos';

export default function Home() {
    const router = useRouter();

    return (
        <main className='mx-auto max-w-screen-sm p-8'>
            <div className='flex justify-center'>
                <Button className='w-full text-xl mb-4' onClick={() => router.push('/todo/create')}>
                    Create todo
                </Button>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Todo List</h1>
                <Todos />
            </div>
        </main>
    );
}

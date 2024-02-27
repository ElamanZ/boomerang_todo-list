import { useRouter } from 'next/router'
import Link from 'next/link';
import { Button } from "~/components/ui/button"

export default function Home() {

  const router = useRouter()

  return (
    <main className="mx-auto max-w-screen-sm p-8">
        <div className="flex justify-center">
            <Button className="w-full text-xl mb-4" onClick={() => router.push('/todo/create')}>
                Create todo
            </Button>
        </div>
        <div>
            <h1 className="text-xl font-bold">Todo List</h1>
        </div>
        <Link href="/todo/1">
            Detail Todo
        </Link>

        <Link href="/todo/update/2">
            Update Todo
        </Link>
    </main>
  );
}

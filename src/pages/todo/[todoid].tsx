import { useRouter } from 'next/router'

export default function TodoDetailPage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="mx-auto max-w-screen-sm p-8">
            <h1>Todo Details</h1>
            <p>Todo ID: {id}</p>
        </div>
    )
}
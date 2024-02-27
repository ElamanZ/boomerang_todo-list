import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="mx-auto max-w-screen-sm p-8">
            <h1>Updatess Todo</h1>
            <p>Updating Todo ID: {id}</p>
        </div>
    )
}
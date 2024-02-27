import { useRouter } from 'next/router'
import {Button} from "~/components/ui/button";
import {ChevronLeft} from "lucide-react";
import {Input} from "~/components/ui/input";
import {Textarea} from "~/components/ui/textarea";
import React from "react";

export default function Page() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="mx-auto max-w-screen-sm p-8">
            <Button variant="outline" size="icon" className="w-9 h-5" onClick={() => router.push('/todo')}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <h1 className="mb-4 text-xl font-bold">Вы можете изменить задачу</h1>
            <form className="w-full space-y-2.5">
                <Input type="text" placeholder="Заголовок" />
                <Textarea placeholder="Описание" />
                <div className="w-1/4">
                    <div className="mb-1">Дедлайн</div>
                    <Input className="flex" type="date" placeholder="Заголовок" />
                </div>
                <Button type="submit">Изменить</Button>
            </form>
        </div>
    )
}
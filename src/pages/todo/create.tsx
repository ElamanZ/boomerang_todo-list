import React from 'react';
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {useRouter} from "next/router";

function Create() {
    const router = useRouter()

    return (
        <div className="mx-auto max-w-screen-sm p-8">
            <Button variant="outline" size="icon" className="w-9 h-5" onClick={() => router.push('/todo')}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <h1 className="mb-4 text-xl font-bold">Пожалуйста создайте задачу</h1>
            <form className="w-full space-y-2.5">
                <Input type="text" placeholder="Заголовок" />
                <Textarea placeholder="Описание" />
                <div className="w-1/4">
                    <div className="mb-1">Дедлайн</div>
                    <Input className="flex" type="date" placeholder="Заголовок" />
                </div>
                <Button type="submit">Добавить</Button>
            </form>
        </div>
    );
}

export default Create;
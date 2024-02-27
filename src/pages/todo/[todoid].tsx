import { useRouter } from 'next/router'
import {Checkbox} from "~/components/ui/checkbox";
import {Button} from "~/components/ui/button";
import React from "react";

export default function TodoDetailPage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="mx-auto max-w-screen-sm mt-10">
            <h1 className="mb-4">Детали задачи</h1>
            <div className=" flex-col justify-between border border-gray-500 border-solid rounded-lg p-2">
                <div className="flex items-center justify-between max-w-screen-sm mb-4">
                    <label className="text-xl">
                        Accept terms and conditions
                    </label>
                    <Button className="w-8 h-8 rounded-full">✕</Button>

                </div>
                <div className="text-black italic">
                    <p>Описание:</p>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aliquid aspernatur cum dolor error fugit harum.
                    </span>
                </div>
                <span className="flex justify-between text-black text-xs mt-3">
                    <p className="bg-amber-400 border-solid rounded-lg pl-1 pr-1">
                        Deadline: 28.02.24
                    </p>
                    <p>Created: 20.02.24</p>
                </span>

            </div>
        </div>
    )
}
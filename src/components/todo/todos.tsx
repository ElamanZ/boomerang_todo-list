import React, { useState } from "react";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { getTodos, Todo } from "~/components/api/api";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

function Todos() {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log("green")
    };

    const queryOptions: UseQueryOptions<Todo[], Error> = {
        queryKey: ["todos"],
        queryFn: getTodos,
    };

    const { data: todos, isLoading, error } = useQuery(queryOptions);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
    if (todos.length === 0) return <div>Список задач пуст</div>;

    return (
        <div className="mx-auto max-w-screen-sm">
            {todos?.map((todo: Todo) => (
                <div onClick={handleCheckboxChange} key={todo.id} className="flex justify-between border border-gray-500 border-solid rounded-lg p-2 mt-3">
                    <label className="flex items-center">
                        <Checkbox id="terms" className="w-9 rounded-full h-9" onChange={handleCheckboxChange}/>
                        <label className="ml-2 text-xl">
                            {todo.title}
                        </label>
                    </label>
                    <div className="space-x-2.5">
                        <Button>Detail</Button>
                        <Button>Edit</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Todos;

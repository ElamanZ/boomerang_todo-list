import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodoItem } from '../api';
import { TODOS_QUERY_KEY } from './useGetTodos';
import { useToast } from '~/components/ui/use-toast';

const useDeleteTodo = ({ isRefreshTodoList = true }: { isRefreshTodoList?: boolean } = {}) => {
    const queryClient = useQueryClient();
    const { toast } = useToast();

    const mutation = useMutation({
        mutationFn: deleteTodoItem,
        onSuccess: () => {
            toast({
                title: "Задача успешно удалена!",
                variant: "default",
            });
            if (isRefreshTodoList) queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] });
        },
    });

    return [mutation.mutate, mutation] as const;
};

export default useDeleteTodo;

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { editTodoItem } from '../api';
import { TODOS_QUERY_KEY } from './useGetTodos';
import { useToast } from '~/components/ui/use-toast';

const useEditTodo = ({ isRefreshTodoList = true }: { isRefreshTodoList?: boolean } = {}) => {
	const queryClient = useQueryClient();
	const { toast } = useToast();

	const mutation = useMutation({
		mutationFn: editTodoItem,
		onSuccess: (data, variables) => {
			const { id, body } = variables;
			if ('completed' in body) {
				const message = body.completed ? 'Статус задачи изменен на выполнено!' : 'Статус задачи изменен на невыполнено!';
				const variant = body.completed ? 'default' : 'destructive';
				toast({
					title: message,
					variant: variant,
				});
			} else {
				toast({
					title: 'Задача успешно изменена!',
					variant: 'default',
				});
			}
			if (isRefreshTodoList) queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] });
		},
	});

	return [mutation.mutate, mutation] as const;
};

export default useEditTodo;

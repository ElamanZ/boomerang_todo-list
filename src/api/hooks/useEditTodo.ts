import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { editTodoItem } from '../api';
import { TODOS_QUERY_KEY } from './useGetTodos';
import { useToast } from '~/components/ui/use-toast';

const useEditTodo = ({ isRefreshTodoList = true }: { isRefreshTodoList?: boolean } = {}) => {
	const queryClient = useQueryClient();
	const { toast } = useToast();

	const mutation = useMutation({
		mutationFn: editTodoItem,
		onSuccess: () => {
			toast({
				title: 'Scheduled: Catch up',
				description: 'Friday, February 10, 2023 at 5:57 PM',
			});
			if (isRefreshTodoList) queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] });
		},
	});

	return [mutation.mutate, mutation] as const;
};

export default useEditTodo;

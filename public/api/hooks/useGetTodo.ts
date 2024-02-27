import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Todo, getDetailTodo, getTodos } from '../api';

export const TODO_DETAIL_QUERY_KEY = 'TODO_DETAIL_QUERY_KEY';

export const useGetTodo = (todoId: number): readonly [Todo | null, UseQueryResult<Todo, Error>] => {
	const query = useQuery<Todo>({
		queryFn: async () => {
			const response = await getDetailTodo(todoId);
			return response;
		},
		queryKey: [TODO_DETAIL_QUERY_KEY],
	});

	return [query.data ?? null, query] as const;
};

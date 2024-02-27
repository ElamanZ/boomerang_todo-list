import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Todo, getTodos } from '../api';

export const TODOS_QUERY_KEY = 'TODOS_EDIT_QUERY_KEY';

export const useGetTodos = (): readonly [Todo[] | null, UseQueryResult<Todo[], Error>] => {
	const query = useQuery<Todo[]>({
		queryFn: getTodos,
		queryKey: [TODOS_QUERY_KEY],
	});

	return [query.data ?? null, query] as const;
};

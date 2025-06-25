import { useQuery } from '@tanstack/react-query';
import { getEduDirections } from '../service';

/** Bachelor / Master directions, keeps previous list visible while refetching */
export function useGetEduDirections(degree: 'BACHELOR' | 'MASTER') {
  return useQuery({
    queryKey: ['edu-directions', degree],
    queryFn: () => getEduDirections(degree),

    // 👇 show the last successful data while the new request is in flight
    placeholderData: (previous) => previous,   // same visual result as keepPreviousData: true
    staleTime: 60_000,                         // (optional) treat data as fresh for 1 min
  });
}

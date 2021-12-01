import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { AxiosResponse } from 'axios';

type Props<T> = {
  queryKey?: string | undefined;
  deps?: QueryKey | undefined;
  options?: Omit<UseQueryOptions, 'queryKey' | 'queryFn'>;
  req: () => Promise<AxiosResponse<T>>;
};

export const useQueryWrapper = <T>({ queryKey, deps, options, req }: Props<T>): UseQueryResult<T> => {
  const key = Array.isArray(deps) ? [queryKey, ...deps] : [queryKey];

  return useQuery(
    key,
    async () => {
      try {
        const res = await req();
        return res.data;
      } catch (error) {
        // TODO エラーハンドリングを書く
      }
    },
    options
  ) as UseQueryResult<T>;
};

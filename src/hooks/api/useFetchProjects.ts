import { UseQueryResult } from 'react-query';
import { axiosInstance } from '../../axiosInstance';
import { Project, TUseQueryOptions } from './types';
import { useQueryWrapper } from './useQueryWrapper';

export const useFetchProjects = ({ deps, options, params }: TUseQueryOptions<{}>): UseQueryResult<Project[]> => {
  return useQueryWrapper<Project[]>({
    queryKey: 'Projects',
    deps,
    options,
    req: () => axiosInstance.get('/projects', { params }),
  });
};

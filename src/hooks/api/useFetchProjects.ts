import { useQuery } from 'react-query';
import { axiosInstance } from '../../axiosInstance';
import { Project } from './types';

export const fetchProjects = async (): Promise<Project> => {
  const { data } = await axiosInstance.get<Project>(`/projects`);
  return data;
};

export const useFetchProjects = () => {
  return useQuery('Projects', fetchProjects);
};

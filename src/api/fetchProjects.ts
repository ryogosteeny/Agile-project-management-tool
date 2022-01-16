import { axiosInstance } from '../axiosInstance';
import { Project } from './types';

export const fetchProjects = async (): Promise<Project[]> => {
  const { data } = await axiosInstance.get<Project[]>(`/projects`);
  return data;
};

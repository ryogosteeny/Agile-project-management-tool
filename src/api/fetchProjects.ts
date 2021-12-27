import { axiosInstance } from '../axiosInstance';
import { Project } from './types';

export const fetchProjects = async () => {
  const { data } = await axiosInstance.get<Project[]>(`/projects`);
  return data;
};

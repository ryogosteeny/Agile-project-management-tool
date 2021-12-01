import { QueryKey, UseQueryOptions } from 'react-query';

export interface TUseQueryOptions<T> {
  params?: T;
  deps?: QueryKey;
  options?: UseQueryOptions;
}

// Project Functions
export interface Project {
  id: string;
  groupID: string;
  keyName: string;
  name: string;
  leaderID: string;
  defaultAssigneeID: string;
  createdAt: Date;
  updatedAt: Date;
}

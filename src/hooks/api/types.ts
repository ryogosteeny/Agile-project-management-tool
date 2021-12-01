import { QueryKey, UseQueryOptions } from 'react-query';

export type TUseQueryOptions<T> = Partial<{
    params: T;
    deps: QueryKey;
    options: UseQueryOptions;
}>

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






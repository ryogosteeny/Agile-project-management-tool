import { renderHook } from '@testing-library/react-hooks';
import { QueryClientProvider, QueryClient, QueryCache } from 'react-query';
import fetchMockProjectsResponse from '../../testData/projects/fetchProjectsResponse.json';
import { useFetchProjects } from './useFetchProjects';
import { axiosInstance } from '../../axiosInstance';
import { ReactNode } from 'react';

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useFetchProjects,useQueryWrapperのテスト', () => {
  afterEach(() => {
    axiosMock.reset();
    queryCache.clear();
  });

  const MockAdapter = require('axios-mock-adapter');
  const axiosMock = new MockAdapter(axiosInstance);

  test('useFetchProjectsのレスポンスデータのテスト', async () => {
    axiosMock.onGet('/projects').reply(200, { fetchMockProjectsResponse });
    const { result, waitFor } = renderHook(() => useFetchProjects({}), { wrapper });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual({ fetchMockProjectsResponse });
  });
});

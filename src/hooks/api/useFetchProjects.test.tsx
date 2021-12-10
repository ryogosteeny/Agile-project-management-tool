import { ReactNode } from 'react';
import { useFetchProjects, fetchProjects } from './useFetchProjects';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import fetchProjectsResponse from '../../testData/projects/fetchProjectsResponse.json';
import { axiosInstance } from '../../axiosInstance';
import MockAdapter from 'axios-mock-adapter';
import { renderHook } from '@testing-library/react-hooks';

const mockAxios = new MockAdapter(axiosInstance, { onNoMatch: 'throwException' });

describe('useFetchProjects', () => {
  const queryCache = new QueryCache();
  const queryClient = new QueryClient({
    queryCache,
  });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  afterEach(() => {
    mockAxios.reset();
    queryCache.clear();
  });

  test('fetchProjectsデータ取得テスト', async () => {
    mockAxios.onGet(`/projects`).reply(200, { fetchProjectsResponse });
    const data = await fetchProjects();
    expect(data).toEqual({ fetchProjectsResponse });
  });

  test('useQueryのSuccess時のデータテスト', async () => {
    mockAxios.onGet(`/projects`).reply(200, { fetchProjectsResponse });
    const { result, waitFor } = renderHook(() => useFetchProjects(), { wrapper });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual({ fetchProjectsResponse });
  });
});

import { renderHook } from '@testing-library/react-hooks';
import { QueryClientProvider, QueryClient, QueryCache } from 'react-query';
import fetchMockProjectsResponse from '../../testData/projects/fetchProjectsResponse.json';
import { axiosInstance } from '../../axiosInstance';
import { ReactNode } from 'react';
import { useQueryWrapper } from './useQueryWrapper';

describe('useQueryWrapperのテスト', () => {
  const queryCache = new QueryCache();
  const queryClient = new QueryClient({
    queryCache,
  });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const MockAdapter = require('axios-mock-adapter');
  const axiosMock = new MockAdapter(axiosInstance);

  afterEach(() => {
    axiosMock.reset();
    queryCache.clear();
  });

  axiosMock.onGet('/projects').reply(200, { fetchMockProjectsResponse });
  const { result, waitFor } = renderHook(() => useQueryWrapper({ req: () => axiosInstance.get('/projects') }), {
    wrapper,
  });

  test('useQueryWrapperのレスポンスデータの比較テスト', async () => {
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual({ fetchMockProjectsResponse });
  });
});

import { fetchProjects } from './fetchProjects';
import fetchProjectsResponse from '../testData/projects/fetchProjectsResponse.json';
import { axiosInstance } from '../axiosInstance';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = new MockAdapter(axiosInstance, { onNoMatch: 'throwException' });

describe('fetchProjects', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('fetchProjectsデータ取得テスト', async () => {
    mockAxios.onGet(`/projects`).reply(200, { fetchProjectsResponse });
    const data = await fetchProjects();
    expect(data).toEqual({ fetchProjectsResponse });
  });
});

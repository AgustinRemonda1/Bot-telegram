import { renderHook } from '@testing-library/react-hooks';
import useListing from './useListing';
import { surveyDataMock } from 'Static/Data';

jest.mock('RepoServices/Surveys', () => ({
  fetchSurveys: () => ({ surveys: surveyDataMock, total: 10 })
}));

describe('useListingSurvey', () => {
  it('show surveys when hook load', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useListing());

    const expected = {
      surveys: surveyDataMock,
      pagination: {
        total: 10,
        loading: false,
        refresh: false,
        page: 0,
        pageSize: 10
      }
    };

    await waitForNextUpdate();

    expect(result.current.state).toEqual(expected);
  });
});

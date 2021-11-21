import { useOpen, UseOpenReturnType } from './useOpen';
import { act, renderHook } from '@testing-library/react-hooks';
import { RenderResult } from '@testing-library/react-hooks/src/types/index';

describe('useOpen', () => {
  let result: RenderResult<UseOpenReturnType>;

  beforeEach(() => {
    result = renderHook(() => useOpen()).result;
  });

  test('openEventHandlerを呼び出したときに、isOpenがtrueに切り替わるか', () => {
    act(() => result.current.openEventHandler());

    expect(result.current.isOpen).toBe(true);
  });

  test('closeEventHandlerを呼び出したときに、isOpenがfalseに切り替わるか', () => {
    act(() => result.current.closeEventHandler());

    expect(result.current.isOpen).toBe(false);
  });
});

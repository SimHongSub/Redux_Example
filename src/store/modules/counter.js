// 카운터 관련 상태 로직
import { createAction, handleActions } from 'redux-actions';

//액션타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

//액션 생성 함수
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

//모듈 초기상태 정의
const initialState = {
    number: 0
};

//리듀서 - 액션타입에 따라 변화된 상태 정의하여 반환
export default handleActions({
  [INCREMENT]: (state, action) => {
    return { number: state.number + 1 };
  },
  [DECREMENT]: ({ number }) => ({ number: number - 1 })
}, initialState);
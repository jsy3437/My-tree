// 액션 타입 정의 => 리덕스 구동에 필요
// const REGISTER_USER = 'user/REGISTER';
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// 액션 생성 함수
export const user_login = (payload) => ({ type: LOGIN, data: payload });
export const user_logout = () => ({ type: LOGOUT });

// 초기값 설정
const loginInit = { login: false, user: {} };

// 리듀서 함수 정의
export const user = (state = { loginInit }, action) => {
	switch (action.type) {
		case LOGIN:
			return { login: true, user: action.data };
		case LOGOUT:
			return loginInit;
		default:
			return state;
	}
};

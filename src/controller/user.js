import axios from 'axios';

const instance = axios.create({
	proxy: 'http://59.14.139.36:8001',
	baseURL: '/user',
	withCredentials: true,
});

const errorMessage = () => {
	window.alert('서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.');
	return new Error('Server Error');
};

export const authCheck = async () => {
	return await instance.get('/loginCheck').catch({ data: { success: false } });
};

export const register = async (userData) => {
	return await instance.post('/register', userData).catch(errorMessage);
};

export const login = async (userData) => {
	return await instance.post('/login', userData).catch(errorMessage);
};

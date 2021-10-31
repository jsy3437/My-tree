import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://59.14.139.36:8001/user',
});

const errorMessage = () => {
	window.alert('서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.');
	return new Error('Server Error');
};

export const register = async (userData) => {
	return await instance.post('/register', userData).catch(errorMessage);
};

export const login = async (userData) => {
	return await instance.post('/login', userData).catch(errorMessage);
};

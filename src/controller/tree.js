import axios from 'axios';

const instance = axios.create({
	proxy: 'http://59.14.139.36:8001',
	baseURL:'/tree',
	withCredentials: true,
});

const errorMessage = () => {
	window.alert('서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.');
	return new Error('Server Error');
};

export const planting = async (userData) => {
	return await instance.post('/', userData).catch(errorMessage);
};

export const treeList = async (userData) => {
	return await instance.get('/', userData).catch(errorMessage);
};

import React, { useState } from 'react';

import { useHistory } from 'react-router';

import { login } from '../controller/user';
import { register } from '../controller/user';

import path1 from '../images/path1.svg';
import path2 from '../images/path2.svg';
import seed from '../images/seed.svg';

function MainPage() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'email':
				return setEmail(value);
			case 'password':
				return setPassword(value);
			case 'confirmPassword':
				return setConfirmPassword(value);
		}
	};

	let test = {
		emailTest: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
		passwordTest: /^(?=\.*[a-zA-Z])(?=\.*[!@#$%^*+=-])(?=\.*[0-9])\.{8,25}$/,
	};

	const onSubmitRegisterHandler = () => {
		// if (test.passwordTest.exec(password) === null || password !== confirmPassword) {
		// 	return alert('항목을 정확하게 기입해주세요. * 비밀번호는 영문, 숫자, 특수문자(!@#$%^&amp;*+=)를 조합한 8자 이상이어야 합니다.');
		// } else if (test.emailTest.exec(email) === null) {
		// 	return alert('항목을 정확하게 기입해주세요. * 이메일은 ex)example@exam.ple 형식이어야 합니다.');
		// }

		const userData = {
			email: email,
			password: password,
		};

		console.log(userData);

		register(userData)
			.then((res) => {
				console.log(res.data);
				if (res.data.success) {
					// 	dispatch(user_login(res.data.email));
					alert('회원가입 완료');
					history.push('/intro/1');
				} else {
					alert('회원가입 실패');
				}
			})
			.catch((Error) => console.log(Error));
	};

	const onSubmitLoginHandler = () => {
		const userData = {
			email: email,
			password: password,
		};

		login(userData)
			.then((res) => {
				console.log(res.data);
				if (res.data.success) {
					// 	dispatch(user_login(res.data.user));
					alert('로그인 완료');
					history.push('/intro/1');
				} else {
					alert('회원정보가 존재하지 않습니다.');
				}
			})
			.catch((Error) => console.log(Error));
	};

	return (
		<div className='main_page'>
			<div className='main_title'>
				<p>당신의 기분으로</p> 아름다운 나무를 키워봐요
			</div>

			<div className='user'>
				<div className='user_title'>나무 주인 되기</div>
				<div className='entrance_cont'>
					<div className='user_register_cont'>
						<div className='input_box'>
							<div className='input_title email'>이 메 일</div>
							<input type='text' name='email' onChange={onChangeHandler} />
						</div>
						<div className='input_box'>
							<div className='input_title password'>비밀번호</div>
							<input type='password' name='password' onChange={onChangeHandler} />
						</div>
						<div className='input_box'>
							<div className='input_title passwordConfirm'>비밀번호 확인</div>
							<input type='password' name='confirmPassword' onChange={onChangeHandler} />
						</div>
						<div
							className='btn register'
							onClick={() => {
								onSubmitRegisterHandler();
							}}>
							시작하기
						</div>
					</div>
					<div className='user_login_cont'>
						<div className='input_box'>
							<div className='input_title email'>이 메 일</div>
							<input type='text' name='email' onChange={onChangeHandler} />
						</div>
						<div className='input_box'>
							<div className='input_title password'>비밀번호</div>
							<input type='password' name='password' onChange={onChangeHandler} />
						</div>
						<div
							className='btn login'
							onClick={() => {
								onSubmitLoginHandler();
							}}>
							계속하기
						</div>
					</div>
				</div>
				<div className='easy_login_cont'>
					{/* <div className='easy_log naver'>
						<span>NAVER</span>로 로그인
					</div>
					<div className='easy_log google'>
						<span>
							G<span id='red'>o</span>
							<span id='yel'>o</span>g<span id='gre'>l</span>
							<span id='red'>e</span>
						</span>
						로 로그인
					</div>
					<div className='easy_log kakao'>
						<span>KAKAO</span>로 로그인
					</div> */}
				</div>
			</div>

			<div className='seed_cont'>
				<div className='path1'>
					<img src={path1} />
				</div>
				<div className='path2'>
					<img src={path2} />
				</div>
				<div className='seed'>
					<img src={seed} />
				</div>
			</div>
		</div>
	);
}
export default MainPage;

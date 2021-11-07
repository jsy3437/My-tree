import React, { useState } from 'react';

import { useHistory } from 'react-router';

import { login } from '../controller/user';
import { register } from '../controller/user';

import path1 from '../images/path1.svg';
import path2 from '../images/path2.svg';
import seed from '../images/seed.svg';

function MainPage() {
	const history = useHistory();

	const [loginData, setLoginData] = useState({ email: '', password: '' });
	const [regData, setRegData] = useState({ email: '', password: '', confirmPassword: '' });

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'logEmail':
				return setLoginData({ ...loginData, email: value });
			case 'logPassword':
				return setLoginData({ ...loginData, password: value });
			case 'regEmail':
				return setRegData({ ...regData, email: value });
			case 'regPassword':
				return setRegData({ ...regData, password: value });
			case 'confirmPassword':
				return setRegData({ ...regData, confirmPassword: value });
		}
	};

	let test = {
		emailTest: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
		passwordTest: /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/,
	};

	const onSubmitRegisterHandler = () => {
		if (test.passwordTest.exec(regData.password) === null) {
			return alert('항목을 정확하게 기입해주세요. * 비밀번호는 영문, 숫자, 특수문자(!@#$%^&amp;*+=)를 조합한 8자 이상이어야 합니다.');
		} else if (test.emailTest.exec(regData.email) === null) {
			return alert('항목을 정확하게 기입해주세요. * 이메일은 ex)example@exam.ple 형식이어야 합니다.');
		} else if (regData.password !== regData.confirmPassword) {
			return alert('항목을 정확하게 기입해주세요. * 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
		}

		const userData = {
			email: regData.email,
			password: regData.password,
		};

		console.log(userData);

		register(userData)
			.then((res) => {
				console.log(res.data);
				if (res.data.success) {
					// 	dispatch(user_login(res.data.email));
					alert('회원가입 완료');
					history.push('/loading');
				} else {
					alert('회원가입 실패');
				}
			})
			.catch((Error) => console.log(Error));
	};

	const onSubmitLoginHandler = () => {
		const userData = {
			email: loginData.email,
			password: loginData.password,
		};

		login(userData)
			.then((res) => {
				console.log(res.data);
				if (res.data.success) {
					// 	dispatch(user_login(res.data.user));
					alert('로그인 완료');
					history.push('/loading');
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
							<input type='text' name='regEmail' onChange={onChangeHandler} />
						</div>
						<div className='input_box'>
							<div className='input_title password'>비밀번호</div>
							<input type='password' name='regPassword' onChange={onChangeHandler} />
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
							<input type='text' name='logEmail' onChange={onChangeHandler} />
						</div>
						<div className='input_box'>
							<div className='input_title password'>비밀번호</div>
							<input type='password' name='logPassword' onChange={onChangeHandler} />
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

				{/* 간편 로그인 */}
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

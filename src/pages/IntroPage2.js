import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import path2 from '../images/path2.svg';
import seed from '../images/seed.svg';
import user from '../images/user.svg';
import trace from '../images/trace.svg';

import aggroPath from '../images/aggroPath.svg';

import { wateringPast } from '../controller/watering';

function IntroPage2() {
	const location = useLocation();
	const select = location.state.select;
	const [past, setPast] = useState({});

	(function () {
		wateringPast()
			.then((res) => {
				console.log(res.data);
				// if (res.data.success) {
				// 	dispatch(user_login(res.data.user));
				// 	alert('로그인 완료');
				// } else {
				// 	alert('회원정보가 없습니다.');
				// }
			})
			.catch((Error) => console.log(Error));
	})();

	return (
		<div className='intro_page2'>
			<div className='user_menu_cont'>
				<div className='profile'>
					<img src={user} />
				</div>
				<div className='trace'>
					<img src={trace} />
				</div>
			</div>
			<div className='main_title'>내일 오후에 만나요 :&#41;</div>

			<div className='blank'></div>

			<div className='seed_cont'>
				<div className='path1'>
					<img alt='ddddd' src={select.path} />
				</div>
				<div className='path2'>
					<img src={path2} />
				</div>
				<div className='seed'>
					<img src={seed} />
				</div>
			</div>

			<div className='past_cont'>
				<div className='past'>
					<img />
					<p>day 1</p>
				</div>
			</div>
		</div>
	);
}

export default IntroPage2;

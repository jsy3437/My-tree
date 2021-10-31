import React, { useEffect, useState } from 'react';

import path1 from '../images/path1.svg';
import path2 from '../images/path2.svg';
import seed from '../images/seed.svg';
import user from '../images/user.svg';
import trace from '../images/trace.svg';

import { feel } from '../data/feel';

function IntroPage1() {
	const [cur, setCur] = useState(0);
	const [select, setSelect] = useState({});

	return (
		<div className='App'>
			<div className='user_menu_cont'>
				<div className='profile'>
					<img src={user} />
				</div>
				<div className='trace'>
					<img src={trace} />
				</div>
			</div>
			{!!!select.name && <div className='main_title'>오늘 하루 어떠셨나요?</div>}
			{cur >= 4 && <div className='main_title'>{select.name} 한방울</div>}
			{cur >= 4 && <img className='sel_watering' src={select.select} />}
			<div className='blank'>
				{cur !== 4 && (
					<div className='water_cont'>
						{feel.map((el) => (
							<div
								className='water'
								style={el.name === select.name ? { color: 'red' } : {}}
								onClick={() => {
									setCur(3);
									return setSelect(el);
								}}>
								<img src={el.img} />
								{el.name}
							</div>
						))}
					</div>
				)}
				{!!select.name && cur !== 4 && (
					<button className='watering_btn' onClick={() => setCur(4)}>
						물주기
					</button>
				)}
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

export default IntroPage1;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { feel } from '../data/feel';

import { wateringPast } from '../controller/watering';
import Profile from '../component/Profile';

import path2 from '../images/path2.svg';
import seed from '../images/seed.svg';
import sprout from '../images/sprout.svg';
import leaf from '../images/leaf.svg';

function WaitingPage() {
	const location = useLocation();

	const select = location.state.select;
	const treeId = location.state.treeId;
	const day = location.state.day;

	const [records, setRecords] = useState([]);
	const [past, setPast] = useState([]);

	useEffect(() => {
		wateringPast(treeId)
			.then((res) => {
				setRecords(res.data.records);
				console.log(res.data);
				if (res.data.success) {
					pastFeel(res.data.records);
				} else {
					alert('서버가 응답하지 않습니다.');
				}
			})
			.catch((Error) => console.log(Error));
	}, []);
	// console.log(records);

	const pastDay = past.map((el, i) => (
		<div className='past'>
			<img src={el.select} />
			<p>day {i + 1}</p>
		</div>
	));

	// 물준 기록 띄우는 함수
	function pastFeel() {
		let copy = [];
		records.map((el) => {
			switch (el.mood) {
				case '기쁨':
					copy.push(feel[0]);
					break;
				case '설렘':
					copy.push(feel[1]);
					break;
				case '그냥':
					copy.push(feel[2]);
					break;
				case '슬픔':
					copy.push(feel[3]);
					break;
				case '화남':
					copy.push(feel[4]);
					break;
			}
		});
		setPast(copy);
	}
	console.log(past);
	return (
		<div className='watering_page'>
			<Profile />
			<div className='main_title'>
				{!!select === false ? '아직은 물주기 시간이 아니에요 조금만 기다려요 :)' : '내일 만나요 :)'}
			</div>

			<div className='blank'></div>

			<div className='seed_cont'>
				<div className='path1'>
					{/* <img src={past[0].path} /> */}
				</div>
				<div className='path2'>
					<img src={path2} />
				</div>
				<div className='seed'>
					{day === 1 || !!day === false ? <img src={seed} className='seedImg' /> : null}
					{day === 2 || day === 3 ? <img src={sprout} className='sproutImg' /> : null}
					{day === 3 && <img src={leaf} className='leafImg' />}
				</div>
				<div className='past_cont'>{pastDay}</div>
			</div>

			<div className='past_cont'>{pastDay}</div>
		</div>
	);
}

export default WaitingPage;

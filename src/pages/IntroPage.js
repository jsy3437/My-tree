import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import path1 from '../images/path1.svg';
import path2 from '../images/path2.svg';
import seed from '../images/seed.svg';

import { wateringPast } from '../controller/watering';
import Profile from '../component/Profile';

function IntroPage() {
	const history = useHistory();
	const location = useLocation();
	const [day, setDay] = useState();
	const [records, setRecords] = useState([]);
	const list = location.state;
	const treeId = list.id;

	let select = records;
	let [isWatering, setIsWatering] = useState('');

	let text = [];

	useEffect(() => {
		wateringPast(treeId)
			.then((res) => {
				console.log(res.data);
				if (res.data.success) {
					setRecords(res.data.records);
					setIsWatering(res.data.isWatering);
				} else {
					alert('서버가 응답하지 않습니다.');
				}
			})
			.catch((Error) => console.log(Error));
	}, []);

	console.log(treeId);
	console.log(isWatering);

	useEffect(() => {
		if (!!day === false) {
			elapsedDay();
		}

		let time = setTimeout(() => {
			if (isWatering === true) {
				history.push({ pathname: '/waiting', state: { day, treeId } });
			} else {
				history.push({
					pathname: '/watering',
					state: { list, day },
				});
			}
		}, 3000);
	});
	console.log(list);
	console.log(day);

	function elapsedDay() {
		const today = new Date();

		// const date = new Date('2021-10-01T01:36:28.000Z');
		const date = new Date(list.createdAt);

		// const nextDay = `2021-10-29T15:18:06.000Z${date.getDate() + 1}`;
		let pastDay;

		if (today.getMonth() === date.getMonth()) {
			if (today.getDate() === date.getDate()) {
				return setDay(1);
			} else {
				return setDay(today.getDate() - date.getDate());
			}
		} else {
			if (
				date.getMonth() === 1 ||
				date.getMonth() === 3 ||
				date.getMonth() === 5 ||
				date.getMonth() === 7 ||
				date.getMonth() === 8 ||
				date.getMonth() === 10 ||
				date.getMonth() === 12
			) {
				pastDay = 31 - date.getDate() + today.getDate();
			} else if (date.getMonth() === 2) {
				pastDay = 28 - date.getDate() + today.getDate();
			} else if (date.getMonth() === 4 || date.getMonth() === 6 || date.getMonth() === 9 || date.getMonth() === 11) {
				pastDay = 30 - date.getDate() + today.getDate();
			}
			return setDay(pastDay);
		}
	}

	return (
		<div className='intro_page'>
			<Profile list={list} />
			<div className='main_title'>
				{day === 1 ? '오늘 하루 기분을 담아 식물에 물을 주어봐요' : '물이 필요해요! 오늘 기분을 골라주세요'}
			</div>

			<div className='blank'>
				<p className='tree_day'>day {day}</p>
			</div>

			<div className='seed_cont'>
				<div className='path1'>
					<img alt='ddddd' src={path1} />
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

export default IntroPage;

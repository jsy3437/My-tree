import React, { useState, useEffect } from 'react';

import { feel } from '../data/feel';
import { useHistory, useLocation } from 'react-router';
import { useParams } from 'react-router-dom';
import { watering } from '../controller/watering';
import { wateringPast } from '../controller/watering';
import Profile from '../component/Profile';
import Field from '../component/Field';

function WateringPage() {
	const [cur, setCur] = useState(0);
	const [select, setSelect] = useState({});
	const [records, setRecords] = useState([]);

	const history = useHistory();
	const location = useLocation();
	const list = location.state.list;
	const day = location.state.day;

	const treeId = list.id;

	const onSubmitLoginHandler = () => {
		const userData = {
			mood: select.name,
			treeId,
		};

		watering(userData)
			.then((res) => {
				console.log(res.data);
				if (res.data.success) {
					setRecords(res.data.records);
					setTimeout(() => {
						history.push({ pathname: '/waiting', state: { select: select, treeId, records } });
					}, 1000);
				} else {
					alert('아직 물주기 시간이 되지 않았습니다');
				}
			})
			.catch((Error) => console.log(Error));
	};

	useEffect(() => {
		wateringPast(treeId)
			.then((res) => {
				console.log(res.data);
				if (res.data.success) {
					setRecords(res.data.records);
				} else {
					alert('서버가 응답하지 않습니다.');
				}
			})
			.catch((Error) => console.log(Error));
	}, []);

	console.log(records);



	return (
		<div className='intro_page'>
			<Profile />
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
					<button
						className='watering_btn'
						onClick={() => {
							setCur(4);
							onSubmitLoginHandler();
						}}>
						물주기
					</button>
				)}
			</div>

			{/* <div className='seed_cont'>
				<div className='path1'>
					<img src={path1} />
				</div>
				<div className='path2'>
					<img src={path2} />
				</div>
				<div className='seed'>
					{day === 1 && <img src={seed} className='seedImg' />}
					{day === 2 || day === 3 ? <img src={sprout} className='sproutImg' /> : null}
					{day === 3 && <img src={leaf} className='leafImg' />}
				</div>
			</div> */}
			<Field day={day} list={list} select={select} records={records} />
		</div>
	);
}

export default WateringPage;

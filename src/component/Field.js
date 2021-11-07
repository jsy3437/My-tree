import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import path1 from '../images/path1.svg';
import path2 from '../images/path2.svg';
import seed from '../images/seed.svg';
import sprout from '../images/sprout.svg';
import leaf from '../images/leaf.svg';

import { feel } from '../data/feel';

function Field(props) {
	let select = props.select;
	const location = useLocation();

	const [page, setPage] = useState('');
	const [past, setPast] = useState([]);
	const records = props.records;
	const list = props.list;
	const day = props.day;
	// const day = 2;

	const pastDay = past.map((el, i) => (
		<div className='past'>
			<img src={el.select} />
			<p>day {i + 1}</p>
		</div>
	));

	useEffect(() => {
		if (location.pathname === '/intro' || location.pathname === '/watering' || location.pathname === '/waiting') {
			pastFeel();
		}
		if (location.pathname === '/waiting') {
			setPage('waiting');
		}
	}, []);
	console.log(records);

	function pastFeel() {
		let copy = [];
		console.log(records);
		records.map((el, i) => {
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
	console.log(select);

	return (
		<div className='seed_cont'>
			<div className='path1'>{page === 'waiting' ? <img src={records[0].path} /> : <img src={path1} />}</div>
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
	);
}

export default Field;

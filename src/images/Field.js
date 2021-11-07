import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import path1 from '../images/path1.svg';
import path2 from '../images/path2.svg';
import seed from '../images/seed.svg';
import sprout from '../images/sprout.svg';
import leaf from '../images/leaf.svg';

function Field(props) {
	const select = props.select;
	const location = useLocation();
	// const [day, setDay] = useState();
	const list = props.list;
	// const day = props.day;
	const day = 2;

	const fieldImg = <img alt='ddddd' src={path1} />;
	let seedImg = { seed };

	useEffect(() => {
		if (location.pathname === '/intro' || location.pathname === '/watering') {
			if (day === 1) {
				seedImg = { seed };
			} else if (day === 2) {
				seedImg = { sprout };
			} else {
				seedImg = { leaf };
			}
		}
	});

	return (
		<div className='seed_cont'>
			<div className='path1'>{fieldImg}</div>
			<div className='path2'>
				<img src={path2} />
			</div>
			<div className='seed'>
				<img src={seedImg} />
			</div>
		</div>
	);
}

export default Field;

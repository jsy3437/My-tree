import React, { useState } from 'react';
import path1 from '../images/path1.svg';
import path2 from '../images/path2.svg';
import seed from '../images/seed.svg';

import { period } from '../data/period';
import { planting } from '../controller/tree';
import { useHistory } from 'react-router';
import Profile from '../component/Profile';
import Field from '../component/Field';

function PeriodPage() {
	const history = useHistory();

	function onSubmitHandler(type) {
		planting({ type })
			.then((res) => {
				console.log(res);
				history.push({ pathname: '/intro', state: res.data.tree });
			})
			.catch((err) => console.log(err));
	}

	const periodEl = period.map((el) => (
		<div className='period' onClick={() => onSubmitHandler(el.type)}>
			<img src={el.img} />
			<p>{el.name}</p>
		</div>
	));

	return (
		<div className='period_page'>
			<Profile />
			<div className='main_title'>며칠 간 책임질 수 있나요?</div>

			<div className='blank'>
				<div className='period_box'>{periodEl}</div>
			</div>

			<Field />
		</div>
	);
}

export default PeriodPage;

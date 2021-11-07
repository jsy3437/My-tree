import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

import path1 from '../images/path1.svg';
import path2 from '../images/path2.svg';
import seed from '../images/seed.svg';
import eye from '../images/eye.svg';

import Profile from '../component/Profile';
import Field from '../component/Field';

function PlantList() {
	const location = useLocation();
	const list = location.state;
	console.log(list);

	return (
		<div className='plantList_page'>
			<Profile list={list} />

			<div className='main_title'>식물은 매일매일 관심을 주어야 해요</div>

			<div className='blank'>
				<img src={eye} className='eyeImg' />
			</div>

			<Field />
		</div>
	);
}

export default PlantList;

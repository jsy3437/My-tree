import React, { useEffect, useRef, useState } from 'react';

import path1 from '../images/path1.svg';
import path2 from '../images/path2.svg';
import seed from '../images/seed.svg';

import { treeList } from '../controller/tree';
import { useHistory } from 'react-router';
import Field from '../component/Field';

function LoadingPage() {
	const history = useHistory();
	const [dotNum, setDotNum] = useState(1);

	let [dot, setDot] = useState([]);

	useEffect(() => {
		getTreeList();
		const time = setTimeout(() => {
			if (dotNum <= 3) {
				dot.push('·');
				setDotNum(dotNum + 1);
			} else if (dotNum === 4) {
				dot.push('.');
				setDotNum(dotNum + 1);
			} else {
				setDot([]);
				setDotNum(1);
			}
		}, 700);
	}, [dotNum]);

	console.log(dotNum);
	console.log(dot);

	function getTreeList() {
		//
		treeList()
			.then((res) => {
				console.log(res.data);
				if (res.data.success) {
					if (res.data.list[0].id === null) {
						history.push({ pathname: '/period', state: res.data.list });
					} else {
						history.push({ pathname: '/plant/list', state: res.data.list });
					}
				} else {
					alert('로딩 실패');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className='loading_page'>
			<div className='main_title'>잠시만 기다려 주세요</div>

			<div className='blank'>
				<div className='loading'>{dot}</div>
			</div>

			<Field />
		</div>
	);
}

export default LoadingPage;

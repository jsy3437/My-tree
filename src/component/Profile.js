import React, { useEffect, useState } from 'react';

import user from '../images/user.svg';
import trace from '../images/trace.svg';
import { useHistory, useLocation } from 'react-router';
import { treeList } from '../controller/tree';

function Profile(props) {
	const [userSwitch, setUserSwitch] = useState({ user: false, trace: false });
	const [listSwitch, setListSwitch] = useState(true);
	const [list, setList] = useState([]);
	const history = useHistory();
	const location = useLocation();

	console.log(list);
	useEffect(() => {
		if (userSwitch.trace === false) {
			setListSwitch(false);
		}
	}, [userSwitch]);
	useEffect(() => {
		getTreeList();
		if (location.pathname === '/plant/list') {
			setUserSwitch({ ...userSwitch, user: true, trace: true });
			setListSwitch(true);
		}
	}, []);

	// trace가 false면 plant List도 false

	function getTreeList() {
		//
		treeList()
			.then((res) => {
				console.log(res.data);
				if (res.data.success) {
					if (!!res.data.list[0].id === false) {
						setList([]);
					} else {
						setList([...res.data.list]);
					}
				} else {
					alert('로딩 실패');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const plant = list.map((el) => (
		<div className={listSwitch ? 'trace_plant' : 'none'}>
			<div
				onClick={() => {
					console.log(el);
					history.push({
						pathname: '/intro',
						state: el,
					});
				}}>
				{el.type}
			</div>
		</div>
	));
	const onClickHandler = (e) => {
		console.log(e.target);

		switch (e.target.className) {
			case 'userImg':
				return setUserSwitch({ ...userSwitch, user: !userSwitch.user });
			case 'traceImg':
				return setUserSwitch({ ...userSwitch, trace: !userSwitch.trace });
			case 'plant_list':
				return setListSwitch(!listSwitch);
			case 'new_plant':
				return history.push({ pathname: '/period', state: list });
		}
	};

	return (
		<div className='user_menu_cont'>
			<div className='profile'>
				<img
					src={user}
					className='userImg'
					onClick={(e) => {
						onClickHandler(e);
					}}
				/>
				{userSwitch.user && <div className='logout'>로그아웃</div>}
			</div>
			<div className='trace'>
				<img
					src={trace}
					className='traceImg'
					onClick={(e) => {
						onClickHandler(e);
					}}
				/>
				{userSwitch.trace && (
					<div className='trace_menu'>
						<p
							className='new_plant'
							onClick={(e) => {
								onClickHandler(e);
							}}>
							새로 키우기
						</p>
						<p
							className='plant_list'
							onClick={(e) => {
								onClickHandler(e);
							}}>
							내 식물 보기
						</p>
					</div>
				)}
				{plant}
			</div>
		</div>
	);
}

export default Profile;

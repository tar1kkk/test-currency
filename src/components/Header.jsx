import React, { useEffect, useState } from 'react';
import s from '../components/header.module.css'
import axios from 'axios';

function Header(props) {
	const [currency, setCurrency] = useState([]);
	const getCurrency = async () => {
		const response = await axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
		const data = response.data;
		setCurrency(data);
	}
	useEffect(() => {
		getCurrency()
	}, [])
	return (
		<div>
			<header className={s.header}>
				<h3 style={{ color: 'white' }}><img style={{ width: '40px', height: '40px', padding: '5px 0 0 10px' }}
					src='http://s1.iconbird.com/ico/2013/3/635/w257h2561393885383110.png' /></h3>
				{currency.map((data, index) => {
					return <p className={s.dataList}>{Number(data.buy).toFixed(3)} {data.ccy}</p>
				})}
			</header>
		</div>
	);
}

export default Header;
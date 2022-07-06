import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Convert(props) {
	const [currency, setCurrency] = useState([]);
	const [inpText, setInpText] = useState('');
	const [valuetg, setValuetg] = useState('');
	const getCurrency = async () => {
		const response = await axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
		const data = response.data;
		setCurrency(data);
	}
	useEffect(() => {
		getCurrency();
	}, [])

	const mathCurrency = (e) => {
		setValuetg(e.target.value)
		console.log(e.target.value)
		console.log(currency)

	}
	return (
		<div>
			<input type="text" onChange={(e) => setInpText(e.target.value)} />
			<select name="select" onChange={mathCurrency}>
				<option disabled value='defaultValue' />
				{currency.map((data, index) => {
					return <option value={data.ccy} key={index + 1} >{data.ccy}</option>
				})}
			</select>
			<h3>Result :{inpText} </h3>
		</div >
	);
}

export default Convert;
import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import Indicator from './components/Indicator'

import BalanceType from './types/BalanceType'

import './App.css'

const initialBalance = { balance_usd: 0 }

const App: FC = () => {
	const [balance, setBalance] = useState<BalanceType>(initialBalance)

	const fetchData = async () => {
		try {
			const response = await axios.get(
				'https://alex.devel.softservice.org/testapi/'
			)
			setBalance(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			if (balance.balance_usd < 15) {
				setBalance(prevBalance => ({
					balance_usd: +(prevBalance.balance_usd + 0.2).toFixed(1),
				}))
			}
		}, 2000)

		return () => {
			clearInterval(interval)
		}
	}, [balance])

	console.log(balance)

	return (
		<div className='App'>
			<Indicator balanceUsd={balance.balance_usd} />
		</div>
	)
}

export default App

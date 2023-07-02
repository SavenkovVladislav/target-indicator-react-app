import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import IndicatorForm from './components/IndicatorForm'

import BalanceType from './types/BalanceType'

import './App.scss'

const initialBalance = { balance_usd: 0 }

export const BalanceContext = React.createContext(initialBalance)

const App: FC = () => {
	const [balance, setBalance] = useState<BalanceType>(initialBalance)
	const [error, setError] = useState<string | null>(null)

	const fetchData = async () => {
		try {
			const response = await axios.get(
				'https://alex.devel.softservice.org/testapi/'
			)
			setBalance(response.data)
		} catch (error: any) {
			if (error.response) {
				// Ошибка с ответом от сервера
				setError(error.response.data.message)
			} else if (error.request) {
				// Ошибка без ответа от сервера
				setError('Ошибка соединения с сервером')
			} else {
				// Общая ошибка
				setError(error.message)
			}
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

	return (
		<div className='App'>
			<BalanceContext.Provider value={balance}>
				{error ? <div>{error}</div> : <IndicatorForm />}
				<IndicatorForm />
			</BalanceContext.Provider>
		</div>
	)
}

export default App

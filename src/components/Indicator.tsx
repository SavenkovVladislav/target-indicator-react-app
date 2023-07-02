import { useContext } from 'react'
import { BalanceContext } from '../App'

import '../assets/styles/Indicator.scss'

const Indicator = () => {
	const { balance_usd } = useContext(BalanceContext)

	return (
		<div className='row'>
			<div
				className='row__progress progress'
				style={{ width: `${balance_usd * 12.6}px` }}
			>
				<div className='progress__current-value'>
					<div className='progress__arrow'></div>
					<div>${balance_usd}</div>
				</div>
			</div>
		</div>
	)
}

export default Indicator

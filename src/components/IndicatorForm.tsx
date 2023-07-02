import React, { FC, useContext } from 'react'

import { BalanceContext } from '../App'

import Indicator from './Indicator'

import { ReactComponent as Info } from '../assets/icons/info.svg'

import '../assets/styles/IndicatorForm.scss'

const IndicatorForm: FC = () => {
	const { balance_usd } = useContext(BalanceContext)
	return (
		<div className='indicator'>
			<header className='indicator__header'>Target Indicator Demo</header>
			<div className='indicator__wrapper'>
				<div className='indicator__content content'>
					<div className='content__top'>
						<h3>Reacher:</h3>
						<Indicator />
						<div
							className={
								balance_usd !== 15
									? 'indicator__total-value total-value'
									: 'indicator__total-value indicator__total-value_green'
							}
						>
							<span className='total-value__text'>Target</span>
							<span className='total-value__value'>$15</span>
						</div>
					</div>
					{balance_usd !== 15 && (
						<footer className='content__bottom'>
							<Info />
							<p>
								You need ${+(15 - balance_usd).toFixed(1)} more to reach your
								target.
							</p>
						</footer>
					)}
				</div>
			</div>
		</div>
	)
}

export default IndicatorForm

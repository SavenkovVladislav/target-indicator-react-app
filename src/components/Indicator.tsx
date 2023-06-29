import React, { FC } from 'react'
import '../assets/styles/indicator.css'

import BalanceType from '../types/BalanceType'

import { ReactComponent as Info } from '../assets/icons/info.svg'

interface IndicatorProps {
	balanceUsd: BalanceType['balance_usd']
}

const Indicator: FC<IndicatorProps> = ({ balanceUsd }) => {
	return (
		<div className='indicator'>
			<header className='indicator__header'>Target Indicator Demo</header>
			<div className='indicator__wrapper'>
				<div className='indicator__content content'>
					<div className='content__top'>
						<div>Reacher:</div>

						<div className='indicator__row row'>
							<div
								className='row__progress progress'
								style={{ width: `${balanceUsd * 12.6}px` }}
							>
								<div className='progress__current-value'>
									<div className='progress__arrow'></div>
									<div>${balanceUsd}</div>
								</div>
							</div>
						</div>

						<div
							className={
								balanceUsd !== 15
									? 'indicator__total-value total-value'
									: 'indicator__total-value indicator__total-value_green'
							}
						>
							<div className='total-value__text'>Target</div>
							<div className='total-value__value'>$15</div>
						</div>
					</div>
					{balanceUsd !== 15 && (
						<footer className='content__bottom'>
							<Info />
							<p>
								You need ${+(15 - balanceUsd).toFixed(1)} more to reach your
								target.
							</p>
						</footer>
					)}
				</div>
			</div>
		</div>
	)
}

export default Indicator

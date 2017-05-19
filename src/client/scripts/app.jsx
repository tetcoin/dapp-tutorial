import React from 'react';
import {Bond, TimeBond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond} from 'parity-reactive-ui';
import {formatBlockNumber} from 'oo7-parity';

export class App extends React.Component {
	render() {
		return (
			<div>
				Current block is:
				&nbsp;
				<Rspan style={{fontWeight: 'bold'}}>
					{parity.bonds.height.map(formatBlockNumber)}
				</Rspan>
			</div>
		);
	}
}

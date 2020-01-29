import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import DrumPad from './components/DrumPad';

const data = [
	{ id: 'heater-1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
	{ id: 'heater-2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
	{ id: 'heater-3', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
	{ id: 'heater-4_1', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
	{ id: 'heater-6', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
	{ id: 'dsc_oh', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
	{ id: 'kick_n_hat', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
	{ id: 'rp4_kick_1', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
	{ id: 'cev_h2', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			display: 'play',
			volume: 1,
			onOff: true
		};
	}

	onOffChecked = (event) => {
		if (event.target.checked) {
			this.setState({
				onOff: false
			});
		} else {
			this.setState({
				onOff: true
			});
		}
	};

	changevolume = (amount) => {
		for (let i = 0; i < 9; i++) {
			let audioobject = document.getElementsByTagName('audio')[i];
			audioobject.volume = amount.target.value;
		}
		this.setState({
			volume: amount.target.value
		});
	};

	handleDisplay = (display) => this.setState({ display });

	render() {
		return (
			<div id="drum-machine">
				<div id="display">{this.state.display}</div>
				<div id="settings">
					<div id="onOffLabel">
						<div className="onoffswitch">
							<input
								type="checkbox"
								name="onoffswitch"
								className="onoffswitch-checkbox"
								id="myonoffswitch"
								onChange={this.onOffChecked}
							/>
							<label className="onoffswitch-label" htmlFor="myonoffswitch">
								<span className="onoffswitch-inner" />
								<span className="onoffswitch-switch" />
							</label>
						</div>
					</div>
					<div className="volPower">
						VOLUME: <span>{Math.round(this.state.volume * 100)}%</span>
					</div>
					<div id="volumeLabel">
						<input type="range" id="slider" max="1" min="0" step="0.01" onChange={this.changevolume} />
					</div>
				</div>
				<div id="drum-pads">
					{data.map((d) => (
						<DrumPad
							key={d.id}
							id={d.id}
							src={d.src}
							letter={d.letter}
							handleDisplay={this.handleDisplay}
							{...this.state}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;

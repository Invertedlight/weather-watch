var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

class Location extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			location: '',
			heading: this.props.heading,
			extended5DayWeather: {}
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleChange(event) {
		var value = event.target.value;

		this.setState(function () {
			return {
				location: value
			}
		})
	}


	handleSubmit() {
		var weatherData = api.get5DayWeather(this.state.location)
		console.log(weatherData);
		
		this.setState(function () {
			return {
				extended5DayWeather: weatherData
			}
	}.bind(this));
	}

	// http://api.openweathermap.org/data/2.5/weather?q=4896691&type=accurate&APPID=b2b86302025a3c01df461815989874c6
// http://samples.openweathermap.org/data/2.5/forecast?q=huntey,il&appid=b2b86302025a3c01df461815989874c6

	render() {
		return(
			<div className='container'>
				<label className='heading' htmlFor='location'>
					{this.state.heading}
				</label>
				<input className='form-control'
					id='location'
					placeholder='Chicago, Illinois'
					type='text'
					autoComplete='off'
					value={this.state.location}
					onChange={this.handleChange}
				/>
				<button 
					className='btn'
					type='submit'
					disabled={!this.state.location}
					onClick={this.handleSubmit}
					>
						Get Weather
				</button>
			</div>
			)
	}
}

Location.defaultProps = {
	location: '',
	heading: 'Enter a City and State - Bitch!',
}

Location.propTypes = {
	//id: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	// onSubmit: PropTypes.func.isRequired,
	// onClick: PropTypes.func.isRequired,
}

module.exports = Location;
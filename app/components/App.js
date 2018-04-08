var React = require('react');
var Header = require('./Header');
var Location = require('./Location');

class App extends React.Component {
	render() {
		return(
			<div className='outer-container'>
				<Header />
				<Location 
					heading='Enter a City and State'/>
			</div>
			)
	}
}

module.exports = App;
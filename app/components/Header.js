var React = require('react');
var Location = require('./Location');

class Header extends React.Component {
	render() {
		return(
			<div className='navbar'>
				<Location 
					heading='Clever Title'
				/>
			</div>
			)
	}
}

module.exports = Header;
import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { trips } from './trips';


class App extends Component {
	constructor() {
		super()
		this.state = {
			trips: trips,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredTrips = this.state.trips.filter(trips => {
			return trips.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className='tc'>
			<h1 className='helvetica f1'>Trip Listings</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList trips = {filteredTrips} />
		</div>
		);
	}
}


export default App;



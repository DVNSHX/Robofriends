import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { robots } from './Robots';


class App extends Component
{

	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	// onSearchChange(event){
	// 	const filteredRobots = this.state.robots.filter(robots =>{
	// 		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	// 	})
	// 	console.log(event.target.value);

 // 	}
	

	render()
	{
		return (
		<div className='tc'>
			<h1>Robofriends</h1>
			<SearchBox/>
			<Cardlist robots={this.state.robots}/>
		</div>
		);
	}
}

export default App;
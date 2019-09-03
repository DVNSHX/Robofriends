import React from 'react';


const SearchBox = () =>{
	return(
		<div className='pa3'>
			<input 
				className='pa3 ba b--green bg-light-blue br3 b--blue mb2 grow w-20  shadow-5' 
				type="Search" 
				placeholder='Search Robots'
			/>
		</div>
		)
}

export default SearchBox;
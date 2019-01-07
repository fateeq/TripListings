import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>	
			<input 
				className='pa3 b--solid bw0 bg-black-05 tc'
				type='search' 
				placeholder='Search trips'
				onChange={searchChange} 
			/>
		</div>
	);
}

export default SearchBox
import React from 'react';
import Card from './Card';

const CardList = ({trips}) => {
	return (
		<div>
			{
				trips.map((user, i) => {
					return (
						<Card 
							key={i}
							id={trips[i].id} 
							name={trips[i].name} 
							location={trips[i].location} 
							cost={trips[i].cost} 
							nights={trips[i].nights} 
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;
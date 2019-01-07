import React from 'react';
import './Card.css';

const Card = ({id, name, location, cost, nights}) => {
	return (
		<div className = "dib ma2 w5 tc br3 shadow-4 grow">
			<img src={`https://picsum.photos/240/150?image=${id}`} alt="Camping"/>
			<h1 className="f4">{name}</h1>
			<div className="card_para">
				<p>Location: {location}</p>
				<p>Cost: {cost}</p>
				<p>No. of nights: {nights}</p>
			</div>
		</div>
	);
}

export default Card;
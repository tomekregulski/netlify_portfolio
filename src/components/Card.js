import React from 'react';
import image from '../images/fieldist_demo.png';
import '../styles/projectCard.css';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={props.image} alt='image' className='workImage' />
      <div className='cardContent'>
        <div className='projectName'>{props.name}</div>
        <ul>
          <li>{props.details}</li>
          <li>{props.topTech}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

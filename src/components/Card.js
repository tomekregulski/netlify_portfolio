import React from 'react';

import '../styles/projectCard.css';

const Card = (props) => {
  return (
    <>
      <div className='card-container'>
        <img src={props.image} alt='image' className='workImage' />
        <div className='cardContent'>
          <div className='projectName'>{props.name}</div>
          <p className='projectDescription'>{props.description}</p>
          <p className='projectLinks'>
            <span>
              <a href={props.github} target='_blank' rel='noopener noreferrer'>
                Github
              </a>
            </span>
            <span>
              <a
                href={props.deployed}
                target='_blank'
                rel='noopener noreferrer'
              >
                Deployed App
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

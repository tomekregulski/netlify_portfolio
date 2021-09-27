import React from 'react';

import Icons from './Icons';

import '../styles/projectCard.css';

const Card = (props) => {
  return (
    <>
      <div className='card-container'>
        <img src={props.image} alt='Project Screenshot' className='workImage' />
        <div className='cardContent'>
          <div className='projectName'>
            <span>{props.name}</span>
            <span></span>
          </div>
          <p className='projectDescription'>{props.description}</p>
          <div id='iconContainer'>
            <Icons tech={props.technology} />
          </div>
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

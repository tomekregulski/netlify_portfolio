import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

import '../styles/projectCard.css';

const Card = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ProjectModal onClose={() => setShow(false)} show={show} props={props} />
      <div className='card-container' onClick={() => setShow(true)}>
        <img src={props.image} alt='image' className='workImage' />
        <div className='cardContent'>
          <div className='projectName'>{props.name}</div>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

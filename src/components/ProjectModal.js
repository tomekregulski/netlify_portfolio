import React from 'react';
import '../styles/projectCard.css';

const ProjectModal = (props) => {
  if (!props.show) {
    return null;
  }

  const mapTech = () => {
    console.log(props.props.technology);
    props.props.technology.map((tech) => (
      <div className='modal-item  modal-tech'>{tech}</div>
    ));
  };

  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-content' onClick={props.onClose}>
        <div className='modal-header'>
          <h2 className='modal-title'>{props.props.name}</h2>
        </div>
        <img
          className='modal-img'
          src={props.props.image}
          alt={props.props.name}
        />
        <div className='modal-body'>
          <div className='modal-item modal-description'>
            {props.props.description}
          </div>
          {mapTech()}
          <div className='modal-item  modal-tech'>{props.props.technology}</div>
          <div className='modal-item  modal-links'>
            <span>
              <a
                href={props.props.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            </span>
            <span>
              <a
                href={props.props.deployed}
                target='_blank'
                rel='noopener noreferrer'
              >
                Deployed App
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

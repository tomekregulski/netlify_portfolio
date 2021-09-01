import React from 'react';

const ProjectModal = (props) => {
  if (!props.show) {
    return null;
  }

  console.log(props);

  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h2 className='modal-title'>{props.props.name}</h2>
        </div>
        <img
          className='modal-img'
          src={props.props.image}
          alt={props.props.name}
        />
        <div className='modal-body'>{props.props.details}</div>
        <div className='modal-body'>{props.props.topTech}</div>
        <div className='modal-footer'>
          <button onClick={props.onClose} className='modal-button'>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

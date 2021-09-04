import React from 'react';

function Project(props) {
  console.log(props);

  const mapDetails = () => {
    console.log(props);
    return props.details.map((detail, j) => <li key={j}>{detail}</li>);
  };

  return (
    <div className='card'>
      <div className='card_side-front'>
        <img
          src={props.image}
          className='card_picture-alt'
          alt={props.name}
        ></img>
        <h2 className='card_heading'>
          <span className='card_heading-span-1'>{props.name}</span>
        </h2>
        <div className='card_details'>
          <ul>
            {mapDetails()}
            <li>
              <a href={props.github} target='_blank' rel='noopener noreferrer'>
                GitHub Repo
              </a>
            </li>
            <li>
              <a
                href={props.deployed}
                target='_blank'
                rel='noopener noreferrer'
              >
                Deployed App
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;

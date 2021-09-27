import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiReact,
  SiMysql,
  SiBulma,
  SiNetlify,
  SiHeroku,
  SiKubernetes,
  SiMongodb,
  SiTailwindcss,
  SiAmazonaws,
  SiGooglecloud,
} from 'react-icons/si';

import '../styles/projectCard.css';

const techIcons = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <SiJavascript />,
  react: <SiReact />,
  mysql: <SiMysql />,
  node: <FaNodeJs />,
  bootstrap: <FaBootstrap />,
  bulma: <SiBulma />,
  netlify: <SiNetlify />,
  heroku: <SiHeroku />,
  github: <FaGithub />,
  k8s: <SiKubernetes />,
  docker: <FaDocker />,
  mongo: <SiMongodb />,
  tailwind: <SiTailwindcss />,
  aws: <SiAmazonaws />,
  gcloud: <SiGooglecloud />,
};

const Icons = (props) => {
  return (
    <>
      {props.tech.map((item, index) => (
        <span className='cardIcons' key={index}>
          {techIcons[item]}
        </span>
      ))}
    </>
  );
};

export default Icons;

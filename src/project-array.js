import yup from './images/yup2.png';
import parkShark from './images/park-demo.png';
import iterable from './images/iterable-demo.png';
import taylor from './images/taylor.png';
import fieldist from './images/fieldist_demo.png';

const projects = [
  {
    id: 1,
    name: 'fieldist',
    image: fieldist,
    description:
      'A platform for field marketing agencies to assist the management of both their field team and clients.',
    technology: [
      ['HTML/CSS, ', 'React, ', 'Node.js/Express, ', 'MySQL'],
      // ['Bootstrap, ', 'Cloudinary, ', 'JWT, ', 'Bcrypt'],
      // [
      //   'Google Maps/Places APIs, ',
      //   'Re-Charts, ',
      //   'React Table, ',
      //   'React Dropzone',
      // ],
    ],
    github: 'https://github.com/tomekregulski/fieldist',
    deployed: 'https://secret-wave-01417.herokuapp.com/',
  },
  {
    id: 2,
    name: 'Yup!',
    image: yup,
    description:
      'A platform developed for Yup! Realty to manage their inventory and allow agents to access information from the field.',
    technology: [
      ['HTML/CSS, ', 'JavaScript, ', 'Node.js/Express, ', 'MySQL'],
      // ['Bootstrap, ', 'Handlebars, ', 'Cloudinary, ', 'Streamifier'],
      // ['Multer, ', 'Google Maps API, ', 'NYC Open Data APIs'],
    ],
    github: 'https://github.com/tomekregulski/yup-schlepp',
    deployed: 'https://guarded-atoll-77888.herokuapp.com/login',
  },
  {
    id: 3,
    name: 'ParkSharkNYC',
    image: parkShark,
    description:
      'An app allowing NYC park lovers to find information on nearby parks and keep a journal of their experiences.',
    technology: [
      ['HTML/CSS, ', 'JavaScript, ', 'Bulma'],
      // ['Leaflet.js, ', 'NYC Open Data APIs'],
    ],
    github: 'https://github.com/tomekregulski/ParkSharkNYC',
    deployed: 'https://tomekregulski.github.io/ParkSharkNYC',
  },
  // {
  //   id: 4,
  //   name: 'iterable',
  //   image: iterable,
  //   details: [
  //     'A simple blog site allowing users to sign up, post their own content, as well as engage with others.',
  //     'HTML/CSS, JS, Bootstrap, Handlebars',
  //     'Node.js/Express, MySQL/Sequelize',
  //   ],
  //   github: 'https://github.com/tomekregulski/iterable',
  //   deployed: 'https://evening-depths-19981.herokuapp.com/',
  // },
  {
    id: 5,
    name: 'Taylor Ackley',
    image: taylor,
    description: 'Website built for the artist Taylor Ackley.',
    technology: ['React, ', 'Material-UI, ', 'Netlify'],
    github: 'https://github.com/tomekregulski/taylor_ackley_music',
    deployed: 'https://suspicious-davinci-529b71.netlify.app/',
  },
];

export default projects;

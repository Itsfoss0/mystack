import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './Dev.css';

library.add(fab);

const Dev = ({ dev }) => {
  return (
    <div className='wrapper'>
      <div className='dev-card'>
        <div className='dev-name'>{dev.name}</div>
        <ul className='dev-stack'>
          {dev.stack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <ul className='dev-links'>
          {Object.entries(dev.links).map(([link, social]) => (
            <li key={link}>
              <a href={social}><FontAwesomeIcon icon={['fab', link]} /></a>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Dev;

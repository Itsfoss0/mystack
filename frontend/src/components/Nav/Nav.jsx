import './Nav.css';
const Nav = () => {
  const handleScrollToEvent = () => {
    eventRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <a href='https://gdsc.community.dev/university-of-eldoret/'>GDSC UOE</a>
      <ul>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#' onClick={handleScrollToEvent}>Event</a>
        </li>
        <li>
          <a href='https://gdsc.community.dev/university-of-eldoret/'>Community</a>
        </li>
        <li>
          <a href='https://github.com/GDSC-UoE'>Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

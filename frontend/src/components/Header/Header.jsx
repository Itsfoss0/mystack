import './Header.css';
const Header = ({ content }) => {
  return (
    <div className='wrapper'>
      <div className='header'>
        <h1>{content}</h1>
      </div>
    </div>
  );
};

export default Header;

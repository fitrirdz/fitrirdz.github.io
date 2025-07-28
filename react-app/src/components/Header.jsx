import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('selected-theme') === 'dark'
  );
  const [isScrolled, setIsScrolled] = useState(false);

  // Menu toggle
  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  };

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('selected-theme', isDarkTheme ? 'light' : 'dark');
  };

  // Header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'bg-header' : ''}`} id='header'>
      <nav className='nav container'>
        <Link to='/' className='nav__logo'>
          FitriRdz
        </Link>
        <div
          className={`nav__menu ${isMenuShown ? 'show-menu' : ''}`}
          id='nav-menu'
        >
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link
                to='/'
                className='nav__link'
                onClick={() => setIsMenuShown(false)}
              >
                Home
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='/about'
                className='nav__link'
                onClick={() => setIsMenuShown(false)}
              >
                About Me
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='/portfolio'
                className='nav__link'
                onClick={() => setIsMenuShown(false)}
              >
                Portfolio
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='/contact'
                className='button'
                onClick={() => setIsMenuShown(false)}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <div className='nav__close' id='nav-close' onClick={toggleMenu}>
            <i className='ri-close-line'></i>
          </div>
        </div>
        <div className='nav__actions'>
          <i
            className={`${
              isDarkTheme ? 'ri-sun-line' : 'ri-moon-line'
            } change-theme`}
            id='theme-button'
            onClick={toggleTheme}
          ></i>
          <div className='nav__toggle' id='nav-toggle' onClick={toggleMenu}>
            <i className='ri-apps-2-line'></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container container grid'>
        <div className='footer__content grid'>
          <Link to='/' className='footer__logo'>
            FitriRdz
          </Link>
          <ul className='footer__links'>
            <li>
              <Link to='/about' className='footer__link'>
                About Me
              </Link>
            </li>
            <li>
              <Link to='/portfolio' className='footer__link'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to='/contact' className='footer__link'>
                Contact Me
              </Link>
            </li>
          </ul>
          <div className='footer__social'>
            <a
              href='https://instagram.com/fitrirdz'
              target='_blank'
              rel='noopener noreferrer'
              className='footer__social-link'
            >
              <i className='ri-instagram-fill'></i>
            </a>
            <a
              href='https://github.com/fitrirdz'
              target='_blank'
              rel='noopener noreferrer'
              className='footer__social-link'
            >
              <i className='ri-github-fill'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/fitriratnadewi'
              target='_blank'
              rel='noopener noreferrer'
              className='footer__social-link'
            >
              <i className='ri-linkedin-box-fill'></i>
            </a>
          </div>
        </div>
        <span className='footer__copy'>
          &#169; All Rights Reserved by Fitri Ratna Dewi
        </span>
      </div>
    </footer>
  );
}

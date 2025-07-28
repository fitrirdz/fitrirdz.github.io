import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import '../css/swiper-bundle.min.css';

export default function Home() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('selected-theme') === 'dark'
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const typed = useRef(null);

  // Menu toggle
  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  };

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('selected-theme', newTheme ? 'dark' : 'light');
    if (newTheme) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  };

  // Initialize theme
  useEffect(() => {
    const selectedTheme = localStorage.getItem('selected-theme');
    if (selectedTheme === 'dark') {
      setIsDarkTheme(true);
      document.documentElement.classList.add('dark-theme');
    } else {
      setIsDarkTheme(false);
      document.documentElement.classList.remove('dark-theme');
    }
  }, []);

  // Header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing effect
  useEffect(() => {
    const options = {
      strings: ['Fitri'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true,
    };

    typed.current = new Typed('.multiText', options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      {/* HEADER */}
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
                <Link to='/' className='nav__link'>
                  Home
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='/about' className='nav__link'>
                  About Me
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='/portfolio' className='nav__link'>
                  Portfolio
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='/contact' className='button'>
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

      {/* MAIN */}
      <main className='main'>
        {/* HOME SECTION */}
        <section className='home section'>
          <div className='home__rectangle'></div>
          <div className='home__container container grid'>
            <div className='home__perfil perfil'>
              <div className='perfil__content'>
                <img
                  src='/assets/img/profile-picture.png'
                  alt='image'
                  className='perfil__img'
                />
              </div>
            </div>
            <div className='home__content grid'>
              <div className='home__data grid'>
                <span className='topline'>Hello</span>
                <h1 id='name'>
                  I'm <span className='multiText'>Fitri</span>
                </h1>
                <h2 className='home__profession'>Frontend Developer</h2>
                <div className='home__social'>
                  <a
                    href='https://github.com/fitrirdz'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='home__social-link'
                  >
                    <i className='ri-github-fill'></i>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/fitriratnadewi'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='home__social-link'
                  >
                    <i className='ri-linkedin-box-fill'></i>
                  </a>
                  <a
                    href='https://www.hackerrank.com/profile/fitrirdz'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='home__social-link'
                  >
                    <i className='ri-code-box-fill'></i>
                  </a>
                  <a
                    href='https://www.slideshare.net/fitrirdz'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='home__social-link'
                  >
                    <i className='ri-slideshow-fill'></i>
                  </a>
                  <a
                    href='https://instagram.com/fitrirdz'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='home__social-link'
                  >
                    <i className='ri-instagram-fill'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className='services section'>
          <h2 className='section__title'>
            The Services <br />I Offer
          </h2>
          <div className='services__container container grid'>
            {/* Web Developer Card */}
            <article className='services__card'>
              <i className='ri-code-s-slash-line services__icon'></i>
              <h2 className='services__title'>Web Developer</h2>
              <p className='services__description'>
                Join me on an exciting ride through my web development projects.
                Experience cool designs, awesome features, and the magic of
                HTML, CSS, JavaScript, and more. Let's make your online dreams a
                reality!
              </p>
              <button
                className='services__button button'
                onClick={() => setActiveModal('web')}
              >
                See More
              </button>
              {activeModal === 'web' && (
                <div className='services__modal'>
                  <div className='services__modal-content'>
                    <i
                      className='ri-close-line services__modal-close'
                      onClick={() => setActiveModal(null)}
                    ></i>
                    <h2 className='services__modal-title'>Web Developer</h2>
                    <ul className='services__modal-list grid'>
                      <li className='services__modal-item'>
                        Develop websites and applications using ReactJS or
                        NextJS frameworks
                      </li>
                      <li className='services__modal-item'>
                        Transform visual designs into functional web layouts,
                        collaborating with designers
                      </li>
                      <li className='services__modal-item'>
                        Test, debug, ensure compatibility across browsers,
                        devices for seamless user experience
                      </li>
                      <li className='services__modal-item'>
                        Maintain, update, optimize sites, add features for
                        better performance and user experience
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </article>
            {/* Mobile Developer Card */}
            <article className='services__card'>
              <i className='ri-pen-nib-line services__icon'></i>
              <h2 className='services__title'>Mobile Developer</h2>
              <p className='services__description'>
                Take a peek into my mobile development journey, where I strive
                to create apps that balance creativity and function. Dive into
                the user experiences of each project. Your next mobile solution
                starts here!
              </p>
              <button
                className='services__button button'
                onClick={() => setActiveModal('mobile')}
              >
                See More
              </button>
              {activeModal === 'mobile' && (
                <div className='services__modal'>
                  <div className='services__modal-content'>
                    <i
                      className='ri-close-line services__modal-close'
                      onClick={() => setActiveModal(null)}
                    ></i>
                    <h2 className='services__modal-title'>Mobile Developer</h2>
                    <ul className='services__modal-list grid'>
                      <li className='services__modal-item'>
                        Utilize React Native or Flutter to build mobile
                        applications
                      </li>
                      <li className='services__modal-item'>
                        Collaborate on intuitive UI designs with designers for
                        optimal user experience
                      </li>
                      <li className='services__modal-item'>
                        Ensure cross-platform compatibility through rigorous
                        testing and debugging processes
                      </li>
                      <li className='services__modal-item'>
                        Enhance app performance, security, and user experience
                        through regular updates and optimizations
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </article>
          </div>
        </section>

        {/* WORK SECTION */}
        <section className='work section'>
          <h2 className='section__title'>
            My Most <br />
            Recent Works
          </h2>
          <div id='recent-works' className='work__container container grid'>
            <article className='work__card'>
              <div className='work__link'>
                <img
                  src='/assets/img/reapit-ap-thumbnail.jpeg'
                  alt='image'
                  className='work__img'
                />
              </div>
              <h2 className='work__title'>Reapit | Agentpoint</h2>
              <span className='work__subtitle'>Mobile Application</span>
            </article>
            <article className='work__card'>
              <div className='work__link'>
                <img
                  src='/assets/img/mmsgi-superapp.png'
                  alt='image'
                  className='work__img'
                />
              </div>
              <h2 className='work__title'>MMSGI App</h2>
              <span className='work__subtitle'>Mobile Application</span>
            </article>
            <article className='work__card'>
              <div className='work__link'>
                <img
                  src='/assets/img/bni-credit-management.png'
                  alt='image'
                  className='work__img'
                />
              </div>
              <h2 className='work__title'>Special Rate Credit Management</h2>
              <span className='work__subtitle'>Web Application</span>
            </article>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className='contact section'>
          <div className='contact__container container grid'>
            <h2 className='section__title'>
              Let's Talk <br />
              About Your Project
            </h2>
            <Link to='/contact' className='contact__button button'>
              Contact Me
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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

      {/* SCROLL UP BUTTON */}
      <a
        href='#'
        className={`scrollup ${isScrolled ? 'show-scroll' : ''}`}
        id='scroll-up'
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <i className='ri-arrow-up-line'></i>
      </a>
    </>
  );
}

export default function About() {
  return (
    <main className='main'>
      {/* ABOUT */}
      <section className='about section'>
        <h2 className='section__title'>
          My Personal <br />
          Information
        </h2>

        <div className='about__container about__page container grid'>
          <div className='about__perfil perfil'>
            <div className='perfil__content'>
              <img
                src='/assets/img/profile-picture.png'
                alt='image'
                className='perfil__img'
              />
            </div>
          </div>

          <div className='about__content grid'>
            <div className='about__data grid'>
              <div className='about__info grid'>
                <h1 className='about__name'>Fitri Ratna Dewi</h1>
                <h2 className='about__profession'>Frontend Developer</h2>
                <p className='about__description'>
                  Greetings! I'm Fitri Ratna Dewi, though you can simply call me{' '}
                  <b>Fitri</b>. I've been immersed in Frontend Development for
                  more than <b>4 years</b> now. Throughout my journey, I've had
                  the pleasure of working with a variety of exciting technology
                  stacks.
                </p>
              </div>

              <a href='/contact' className='about__button button'>
                Contact Me
              </a>

              <div className='about__list grid'>
                <div className='about__skills grid'>
                  <h3 className='about__subtitle'>
                    <i className='ri-arrow-right-fill'></i> Core Stack:
                  </h3>

                  <div className='skill__content'>
                    <div className='skill__data'>
                      <img
                        src='/assets/img/react.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/next-js.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/typescript.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/js.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/html-5.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/css-3.png'
                        alt=''
                        className='skills__img'
                      />
                    </div>
                  </div>
                </div>

                <div className='about__skills grid'>
                  <h3 className='about__subtitle'>
                    <i className='ri-arrow-right-fill'></i> Additional Skills:
                  </h3>

                  <div className='skill__content'>
                    <div className='skill__data'>
                      <img
                        src='/assets/img/redux.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/flutter.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/expo.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/nestjs.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/graphql.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/git.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/github.png'
                        alt=''
                        className='skills__img'
                      />
                    </div>
                  </div>
                </div>

                <div className='about__skills grid'>
                  <h3 className='about__subtitle'>
                    <i className='ri-arrow-right-fill'></i> Database & Tools:
                  </h3>

                  <div className='skill__content'>
                    <div className='skill__data'>
                      <img
                        src='/assets/img/firebase.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/sanity.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/mongodb.webp'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/mysql.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/redis.webp'
                        alt=''
                        className='skills__img'
                      />
                    </div>
                  </div>
                </div>

                <div className='about__skills grid'>
                  <h3 className='about__subtitle'>
                    <i className='ri-arrow-right-fill'></i> Additional Tools:
                  </h3>

                  <div className='skill__content'>
                    <div className='skill__data'>
                      <img
                        src='/assets/img/vercel.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/snyk.png'
                        alt=''
                        className='skills__img'
                      />
                      <img
                        src='/assets/img/datadog.png'
                        alt=''
                        className='skills__img'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

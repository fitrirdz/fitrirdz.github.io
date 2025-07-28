export default function Portfolio() {
  return (
    <main className='main'>
      <section className='work section'>
        <h2 className='section__title'>
          My Recent <br />
          Projects
        </h2>

        <div className='work__filters'>
          <span className='work__item active-work' data-filter='all'>
            All
          </span>
          <span className='work__item' data-filter='.web'>
            Web
          </span>
          <span className='work__item' data-filter='.mobile'>
            Mobile
          </span>
          <span className='work__item' data-filter='.design'>
            Design
          </span>
        </div>

        <div className='work__container container grid'>
          <div className='work__card mix mobile'>
            <img
              src='/assets/img/reapit-ap-thumbnail.jpeg'
              alt=''
              className='work__img'
            />
            <h2 className='work__title'>Reapit | Agentpoint</h2>
            <span className='work__subtitle'>Mobile Application</span>

            <span className='work__button'>
              Demo <i className='ri-arrow-right-line'></i>
            </span>
          </div>

          <div className='work__card mix mobile'>
            <img
              src='/assets/img/mmsgi-superapp.png'
              alt=''
              className='work__img'
            />
            <h2 className='work__title'>MMSGI App</h2>
            <span className='work__subtitle'>Mobile Application</span>

            <span className='work__button'>
              Demo <i className='ri-arrow-right-line'></i>
            </span>
          </div>

          <div className='work__card mix web'>
            <img
              src='/assets/img/bni-credit-management.png'
              alt=''
              className='work__img'
            />
            <h2 className='work__title'>Special Rate Credit Management</h2>
            <span className='work__subtitle'>Web Application</span>

            <span className='work__button'>
              Demo <i className='ri-arrow-right-line'></i>
            </span>
          </div>

          <div className='work__card mix web'>
            <img
              src='/assets/img/eid-card-thumbnail.png'
              alt=''
              className='work__img'
            />
            <h2 className='work__title'>Eid Card Generator</h2>
            <span className='work__subtitle'>Web Application</span>

            <span className='work__button'>
              Demo <i className='ri-arrow-right-line'></i>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

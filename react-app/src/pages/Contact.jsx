import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className='main'>
      <section className='contact section'>
        <h2 className='section__title'>
          Let's Talk <br />
          About Your Project
        </h2>

        <div className='contact__page container grid'>
          <form
            onSubmit={handleSubmit}
            className='contact__form grid'
            id='contact-form'
          >
            <div className='contact__group grid'>
              <div className='contact__box'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                  placeholder='Write your name'
                  className='contact__input'
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor='name' className='contact__label'>
                  Full Name
                </label>
              </div>

              <div className='contact__box'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Write your email'
                  className='contact__input'
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor='email' className='contact__label'>
                  Email Address
                </label>
              </div>
            </div>

            <div className='contact__box contact__area'>
              <textarea
                name='message'
                id='message'
                required
                placeholder='Write your message'
                className='contact__input'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label htmlFor='message' className='contact__label'>
                Message
              </label>
            </div>

            <button type='submit' className='contact__button button'>
              Send Message <i className='ri-arrow-right-up-line'></i>
            </button>
          </form>

          <div className='contact__social'>
            <img
              src='/assets/img/profile-picture.png'
              alt=''
              className='contact__social-img'
            />

            <div className='contact__social-data'>
              <div>
                <p className='contact__social-description'>
                  Don't like forms? Send me an email to{' '}
                  <a
                    href='mailto:hello.fitrirdz@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    hello.fitrirdz@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

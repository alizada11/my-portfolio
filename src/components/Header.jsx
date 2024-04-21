import { useState, useEffect, memo } from 'react'
import logo from '../assets/images/logo.png'
import bargar from '../assets/images/bargar.png'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWindowClose,
} from 'react-icons/fa'
import wellfound from '../assets/images/wellFound.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const [activeTab, setActiveTab] = useState('Skills')

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  }

  AOS.init({
    duration: 1000,
  })

  useEffect(() => {
    const textNode = document.getElementById('rainbow-text').firstChild

    if (!CSS.highlights) {
      textNode.textContent = "I'm Jawad Alizada"
    }

    const highlights = []
    for (let i = 0; i < 7; i++) {
      const colorHighlight = new Highlight()
      highlights.push(colorHighlight)

      CSS.highlights.set(`rainbow-color-${i + 1}`, colorHighlight)
    }

    for (let i = 0; i < textNode.textContent.length; i++) {
      const range = new Range()
      range.setStart(textNode, i)
      range.setEnd(textNode, i + 1)

      highlights[i % 7].add(range)
    }
  }, [])

  return (
    <>
      <header className='header'>
        <div className='logo'>
          <a href='#' className='logo-link transforScale'>
            <img
              id='logo'
              className='menu-icon'
              src={logo}
              alt='logo'
              height={45}
            />
          </a>
        </div>
        <nav className='navbar'>
          <ul className='menu'>
            <li className='menu-item'>
              {' '}
              <a href='#contactMe' className='menu-link'>
                {' '}
                Contact{' '}
              </a>{' '}
            </li>
            <li className='menu-item'>
              {' '}
              <a
                href='www.codewithja.com'
                target='_blank'
                className='menu-link'
              >
                {' '}
                Blog{' '}
              </a>{' '}
            </li>
          </ul>
          <div className='hamburger-menu'>
            <img
              onClick={() => setMobileMenu(true)}
              id='hambergar'
              className='menu-icon'
              src={bargar}
              alt='Menu Icon'
            />
          </div>
        </nav>
      </header>

      {mobileMenu ? (
        <div className='mobile-menu' id='mobile-menu'>
          <ul className='m-menu'>
            <li
              id='close-icon'
              className='close-icon'
              onClick={() => setMobileMenu(false)}
            >
              {' '}
              <FaWindowClose className='close-icon' />{' '}
            </li>
            <li className='m-item'>
              {' '}
              <a
                href='#contactMe'
                onClick={() => setMobileMenu(false)}
                className='m-link'
              >
                {' '}
                Contact{' '}
              </a>{' '}
            </li>
            <li className='m-item'>
              {' '}
              <a href='www.google.com' target='_blank' className='m-link'>
                {' '}
                Blog{' '}
              </a>{' '}
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}

      <div className='content for-bg-img'>
        <div className='public-info'>
          <h2
            className='text-color big-text'
            id='rainbow-text'
            data-aos='fade-up'
          >
            {' '}
            I'm Jawad Alizada <br /> Web Developer
          </h2>
          <p className='about-text text-color' data-aos='fade-up'>
            Take a glance at my portfolio and past projects to gain insights
            into my skills and experience. If you have a project in mind that
            requires coding, please feel free to reach out to me. I'm ready to
            help you turn your ideas into reality. for more details{' '}
            <a
              className='resume'
              href='../Jawad Alizada Cv.pdf'
              download='Jawad Alizada Cv.pdf'
            >
              {' '}
              Get my resume{' '}
            </a>
          </p>

          <section className='contact-part' data-aos='fade-up'>
            <h5 className='lets-connect'> LET'S CONNECT </h5>
            <ul className='social-part'>
              <li className='social-item'>
                <a href='https://www.linkedin.com/in/jawad-alizada-089787108/'>
                  {' '}
                  <FaLinkedinIn className='social-icon' />{' '}
                </a>
              </li>
              <li className='social-item'>
                <a href='https://github.com/alizada11'>
                  {' '}
                  <FaGithub className='social-icon' />{' '}
                </a>
              </li>
              {/* <li className='social-item'>
                <a href='https://twitter.com/AliAkbarSazish1'>
                  {' '}
                  <FaTwitter className='social-icon' />{' '}
                </a>
              </li>
              <li className='social-item'>
                <a href='https://wellfound.com/u/ali-akbar-sazish/'>
                  {' '}
                  <img src={wellfound} className='social-icon' />{' '}
                </a>
              </li>
              <li className='social-item'>
                <a href='https://www.facebook.com/profile.php?id=100008137806708'>
                  {' '}
                  <FaFacebook className='social-icon' />{' '}
                </a>
              </li>
              <li className='social-item'>
                <a href='https://www.instagram.com/ali_sazish/'>
                  {' '}
                  <FaInstagram className='social-icon' />{' '}
                </a>
              </li> */}
            </ul>
          </section>

          <div className='tabs'>
            <div
              className={`tab ${activeTab === 'Skills' ? 'active' : ''}`}
              onClick={() => handleTabClick('Skills')}
            >
              Skills
            </div>

            <div
              className={`tab ${activeTab === 'Education' ? 'active' : ''}`}
              onClick={() => handleTabClick('Education')}
            >
              Education
            </div>
            <div
              className={`tab ${activeTab === 'Experience' ? 'active' : ''}`}
              onClick={() => handleTabClick('Experience')}
            >
              Experience
            </div>
          </div>
          <div className='tab-content'>
            {activeTab === 'Skills' && (
              <div>
                {' '}
                <Skills />
              </div>
            )}
            {activeTab === 'Education' && (
              <div>
                {' '}
                <Education />{' '}
              </div>
            )}
            {activeTab === 'Experience' && (
              <div>
                {' '}
                <Experience />{' '}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Header)

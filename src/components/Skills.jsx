import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  AOS.init({
    duration: 1200,
  })
  return (
    <div className='skill-part' data-aos='fade-up'>
      <div className='skills'>
        <div className='skill-items'>
          <h5 className='skill-title'> Front-End </h5>
          <div className='lang'>
            <label className='progress-label' htmlFor='javaScript'>
              JavaScript 90%
            </label>
            <progress id='javaScript' value='90' max='100'>
              {' '}
              90%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='React'>
              ReactJS 75%
            </label>
            <progress id='React' value='75' max='100'>
              {' '}
              75%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='jQuery'>
              jQuery & Ajax 90%
            </label>
            <progress id='jQuery' value='90' max='100'>
              {' '}
              90%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='jQuery'>
              Bootstrap & Tailwind CSS 90%
            </label>
            <progress id='jQuery' value='90' max='100'>
              {' '}
              90%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='jQuery'>
              HTML & CCS 95%
            </label>
            <progress id='jQuery' value='95' max='100'>
              {' '}
              95%{' '}
            </progress>
          </div>
        </div>

        <div className='skill-items'>
          <h5 className='skill-title'> Back-End </h5>
          <div className='lang'>
            <label className='progress-label' htmlFor='PHP'>
              PHP 90%
            </label>
            <progress id='PHP' value='90' max='100'>
              {' '}
              90%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='jQuery'>
              Laravel 95%
            </label>
            <progress id='jQuery' value='95' max='100'>
              {' '}
              95%{' '}
            </progress>
          </div>

          <div className='lang'>
            <label className='progress-label' htmlFor='PHP'>
              SQL 70%
            </label>
            <progress id='SQL' value='70' max='100'>
              {' '}
              70%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='PHP'>
              WordPress 85%
            </label>
            <progress id='WordPress' value='85' max='100'>
              {' '}
              85%{' '}
            </progress>
          </div>
        </div>

        <div className='skill-items'>
          <h5 className='skill-title'> Tools & Methods </h5>
          <div className='lang'>
            <label className='progress-label' htmlFor='React'>
              Git & GitHub 90%
            </label>
            <progress id='GitHub' value='90' max='100'>
              {' '}
              90%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='jQuery'>
              API 90%
            </label>
            <progress id='API' value='90' max='100'>
              {' '}
              90%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='jQuery'>
              Responsive Dev 90%
            </label>
            <progress id='ResDev' value='90' max='100'>
              {' '}
              90%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='jQuery'>
              Chrome Dev Tools 90%
            </label>
            <progress id='DevTools' value='90' max='100'>
              {' '}
              90%{' '}
            </progress>
          </div>
        </div>

        <div className='skill-items'>
          <h5 className='skill-title'> Professional </h5>
          <div className='lang'>
            <label className='progress-label' htmlFor='jQuery'>
              Problem solving{' '}
            </label>
            <progress id='ProblemSolving' value='80' max='100'>
              {' '}
              80%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='jQuery'>
              Team work{' '}
            </label>
            <progress id='TeamWork' value='90' max='100'>
              {' '}
              90%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='jQuery'>
              Mentoring{' '}
            </label>
            <progress id='Mentoring' value='80' max='100'>
              {' '}
              80%{' '}
            </progress>
          </div>
          <div className='lang'>
            <label className='progress-label' htmlFor='jQuery'>
              Remote Pair-Programming
            </label>
            <progress id='pairPrograming' value='80' max='100'>
              {' '}
              80%{' '}
            </progress>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

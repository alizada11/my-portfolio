import AOS from 'aos'
import 'aos/dist/aos.css'

const Education = () => {
  AOS.init({
    duration: 1200,
  })
  return (
    <>
      <div data-aos='fade-up'>
        <p className='education'>
          Kabul University, Bachelor in computer science. Afghanistan, Kabul.
          2012 – 2016
        </p>
        <p className='education'>
          Qom University of Technologies, Master in Software Engineering. Sep,
          2021 – Now
        </p>
      </div>
    </>
  )
}

export default Education

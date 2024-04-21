import AOS from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
  AOS.init({
    duration: 1200,
  })
  return (
    <div className='work-expereince' data-aos='fade-up'>
      👨🏻‍💻 Web Developer | Full time | Onsite | Pooneh Media Dec 2022 – June 2023
      <ul>
        <li>
          Develop and maintain websites using PHP, Joomla, JS jQuery and related
          technologies.
        </li>
        <li>
          Collaborate with front-end developers to integrate front-end and
          back-end functionalities.
        </li>
        <li>
          Translate design concepts into functional code by working with UI/UX
          designers.
        </li>
        <li>
          Implementing responsive design and ensuring cross-browser
          compatibility.
        </li>
      </ul>
      👨🏻‍💻 Web Developer | Full time | Onsite | Tejaratdaran Farda Nov 2021 - Nov
      2022
      <ul>
        <li>
          Contributed to developing a centralized software system for dental
          clinic, including HR, Financial, reception, and main modules.
        </li>
        <li>
          The system focused on patients’ records, HR and financial department.
        </li>
        <li>
          Independently developed 2 modules and collaborated on 3 additional
          projects.
        </li>
        <li>
          Maintaining and adding new features in to existing systems developed
          on CodeIgniter and OpenCart frameworks.
        </li>
      </ul>
      👨🏻‍💻 Database Manager | Full time | Onsite | Independent Directorate of
      Local Governance Sep 2018 – Aug 2021
      <ul>
        <li>Managed databases for HR records above 30,000 employees.</li>
        <li>
          Work closely with developers to assist in database development tasks.
        </li>
        <li>Support database backup and recovery processes as needed.</li>
      </ul>
    </div>
  )
}

export default Experience

import { useState } from "react";
import firstProject from '../assets/images/starfoods.png';
import secondProject from '../assets/images/crm.png';
import thirdProject from '../assets/images/awesome-book.png';
import fourthProject from '../assets/images/todo-list.png';
import fifthProject from '../assets/images/air-pollution-api.png';
import {FaWindowClose} from 'react-icons/fa';
import sixthProject from '../assets/images/sazish-academy.png';
import seventhProject from '../assets/images/boostroe.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
      id: '1',
      title: 'Starfoods',
      desc: 'Starfoods demonstrates my web development skills, emphasizing user-friendly interfaces, smooth shopping experiences, secure payments, and quick shipping. Explore my work to see how I can enhance your next project!',
      technogies: ['React', 'Bootstrap', 'CSS', 'SQL Server', 'Laravel'],
      img: firstProject,
      demoLink: 'https://star.starfoods.ir',
      sourceLink: 'https://github.com/akbarsazish/starfoods',
      ccompany:'Hajizada Trading',
      positon: 'Front-end Developer',
      year: '2023'
    },
    {
      id: '2',
      title: 'CRM',
      desc: 'A CRM (Customer Relationship Management) system, a key feature in my portfolio, streamlines customer data management, fosters collaboration, and provides in-depth analytics. As a web developer, I specialize in creating adaptable CRM solutions that support sales, customer service, and growth, reflecting my skills in developing efficient, data-driven applications.',
      technogies: ['JavScript','jQuery', 'Bootstrap', 'SQL Server', 'Laravel', 'CSS'],
      img: secondProject,
      demoLink: 'https://star4.ir',
      sourceLink: 'https://github.com/akbarsazish/crm-update',
      ccompany:'Hajizada Trading',
      positon: 'Front-end Developer',
      year: '2022'
    },
    {
      id: '3',
      title: 'Air Pollution API',
      desc: 'Presenting a straightforward air pollution application that offers historical air quality data for various countries worldwide. Users can easily search for specific locations to access air pollution information. Special thanks to "https://openweathermap.org/api" for providing reliable data through an efficient API.',
      technogies: ['React', 'Redux Toolkit', 'CSS', 'HTML'],
      img: fifthProject,
      demoLink: 'https://akbarsazish.github.io/Air-Pollution-API',
      sourceLink: 'https://github.com/akbarsazish/Air-Pollution-API',
      ccompany:'Microverse',
      positon: 'Student',
      year: '2023'
    },

    {
      id: '4',
      title: 'Awesome Books',
      desc: 'This website is a book collection manager. It lets you add books with their titles and authors to a list and remove them when needed. The data is stored in the browser memory using localStorage for easy access and persistence. It is a simple and efficient tool for keeping track of your books.',
      technogies: ['HTML', 'CSS', 'JavScript'],
      img: thirdProject,
      demoLink: 'https://akbarsazish.github.io/Awesome-Books-ES6/',
      sourceLink: 'https://github.com/akbarsazish/Awesome-Books-ES6',
      ccompany:'Microvers',
      positon: 'Student',
      year: '2023'
    },
    {
      id: '5',
      title: 'To Do List',
      desc: 'To-Do List is a web-based application crafted to empower individuals in efficient task management. Users can seamlessly create, list, and remove tasks, enhancing their productivity and organization.',
      technogies: ['HTML', 'CSS', 'JavScript'],
      img: fourthProject,
      demoLink: 'https://akbarsazish.github.io/To-Do-List/',
      sourceLink: 'https://github.com/akbarsazish/To-Do-List',
      ccompany:'Microverse',
      positon: 'Student',
      year: '2023'
    },
   
    {
    id: '6',
    title: 'Sazish Academy',
    desc: 'Sazish Academy is an online platform for web development and programming. I will be enhancing in the future and include tutorials on HTML, CSS, JavaScript, PHP, ASP.NET, and more, spanning front-end, back-end, mobile app development, and web design.',
    technogies: ['CSS', 'HTML', 'JavScript'],
    img: sixthProject,
    demoLink: 'https://akbarsazish.github.io/Sazish-Academy',
    sourceLink: 'https://github.com/akbarsazish/Sazish-Academy',
    ccompany:'Microverse',
    positon: 'Student',
    year: '2023'
  },

  {
    id: '7',
    title: 'BookStor with React Redux',
    desc: 'An online small project which developed by react and redux toolkit that enable users that they can add their books and authors, see list of books and they are able edit and delete the book from the list.',
    technogies: ['React', 'Redux Tookit', 'css'],
    img: seventhProject,
    demoLink: 'https://akbarsazish.github.io/Bookstore-React/',
    sourceLink: 'https://github.com/akbarsazish/Bookstore-React',
    ccompany:'Microverse',
    positon: 'Student',
    year: '2023'
  },

  

  ];

  const ProjectPart = () => {
    const [visibleModalId, setVisibleModalId] = useState(null);

    const showProjectDetails = (projectId) => {
      setVisibleModalId(projectId);
    };

    const hideProjectDetails = () => {
      setVisibleModalId(null);
    };

    AOS.init({
      duration: 1000,
    })

    return (
        <>
      <section className="my-snpashoot" id="myProjects">
        {data.map((project) => (
            <div data-aos="fade-up" className="snapshoot-card" key={project.id}>
             {project.id % 2 === 0 ? (
                <div className="snapshoot for-bg-img" id={`snapshoot-profile${project.id}`}>
                    <img className="porject-img" id={`image${project.id}`} src={project.img} alt="image" />
                </div>
                ) : (
                ""
                )}

            <div className="tonic-part">
              <h2 className="headline-2">{project.title}</h2>
              <ul className="worke-expr">
                <li className="exp-items exp-item1">{project.ccompany}</li>
                <li className="exp-items exp-item2">{project.positon}</li>
                <li className="exp-items exp-item3">{project.year}</li>
              </ul>
              <p className="exp-info text-color">{project.desc}</p>
              <ul className="work-tech">
                {project.technogies.map((tech, index) => (
                  <li className="tech-items" key={index}>{tech}</li>
                ))}
              </ul>
              <button onClick={()=> showProjectDetails(project.id)} type="button" id="seeProject" className="see-project btnHover btnPressed btnDisabled">
                See Project
              </button>
            </div>

            {project.id % 2 !== 0 ? (
            <div className="snapshoot for-bg-img" id={`snapshoot-profile${project.id}`}>
                <img className="porject-img" id={`image${project.id}`} src={project.img} alt="image" />
            </div>
            ) : (
            ""
            )}

          </div>
        ))}
          <div className="snapshoot-card" data-aos="fade-up">
            <div className="tonic-part">
              <p className="table-caption"> Below is a table showcasing a collection of remarkable projects along with links to their source code and live demos. </p>
             <table>
                  <thead>
                    <tr>
                      <th>Project Title</th>
                      <th> Technologies </th>
                      <th> Live Demo </th>
                      <th> Source Code </th>
                      <th className="pro-date"> Date </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> Math Magician </td>
                      <td> 
                         <span className="technology">React </span> 
                         <span className="technology">Redux Toolkit</span> 
                         <span className="technology">CSS</span> 
                     </td>
                      <td>
                        <button type="button" className="popupBtn see-project btnHover btnPressed for-mobile-btn"> 
                          <a href="https://math-magicians-9om6.onrender.com" target="_blank">  See Live  </a>
                        </button>
                      </td>
                      <td>
                        <button type="button" className="popupBtn see-project btnHover btnPressed for-mobile-btn"> 
                          <a href="https://github.com/akbarsazish/Math-Magicians" target="_blank"> See Source  </a>
                        </button>
                      </td>
                      <td  className="pro-date"> Aug 8, 2023 </td>
                    </tr>

                    <tr>
                      <td> Leaderboard API </td>
                      <td> 
                         <span className="technology">JavaScript </span> 
                         <span className="technology">CSS</span> 
                         <span className="technology">HTML</span> 
                     </td>
                      <td>
                        <button type="button" className="popupBtn see-project btnHover btnPressed for-mobile-btn"> 
                          <a href="https://akbarsazish.github.io/Leaderboard" target="_blank">  See Live  </a>
                        </button>
                      </td>
                      <td>
                        <button type="button" className="popupBtn see-project btnHover btnPressed for-mobile-btn"> 
                          <a href="https://github.com/akbarsazish/Leaderboard/tree/main" target="_blank"> See Source  </a>
                        </button>
                      </td>
                      <td className="pro-date"> jul 8, 2023 </td>
                    </tr>
                    <tr>
                      <td> Space Travelers' Hub </td>
                      <td> 
                         <span className="technology">React </span> 
                         <span className="technology">Redux Toolkit</span> 
                         <span className="technology">CSS</span> 
                     </td>
                      <td>
                        <button type="button" className="popupBtn see-project btnHover btnPressed for-mobile-btn"> 
                          <a href="https://github.com/Grandi0z/Space_travelers_hub" target="_blank">  See Live  </a>
                        </button>
                      </td>
                      <td>
                        <button type="button" className="popupBtn see-project btnHover btnPressed for-mobile-btn"> 
                          <a href="https://github.com/Grandi0z/Space_travelers_hub" target="_blank"> See Source  </a>
                        </button>
                      </td>
                      <td  className="pro-date"> Aug 15, 2023 </td>
                    </tr>

                  </tbody>
                </table>
          
            </div>
          </div>
      </section>
       
      {data.map((projectModal) => (
          <div key={projectModal.id}>
             {visibleModalId === projectModal.id && (
               <div id={`prDetails${projectModal.id}`} className="modal">
                <span data-aos="fade-up">
                <div className="porject-details" id="porject-details" >
                <span className="close-popup">
                  <FaWindowClose onClick={()=>hideProjectDetails(projectModal.id)} />
                </span>
                   <h2 className="headline-2"> {projectModal.title} </h2>
                    <ul className="worke-expr-details">
                        <li className="exp-detail-items exp-item1"> {projectModal.ccompany}  </li>
                        <li className="exp-detail-items exp-item2"> {projectModal.positon} </li>
                        <li className="exp-detail-items exp-item3"> {projectModal.year}  </li>
                    </ul>
                    <div className="details-img-wrapper">
                        <img className="details-img" src={projectModal.img} alt="image" />
                    </div>
                    <div className="project-info">
                        <div className="info-text">
                            <p> {projectModal.desc} </p>
                        </div>
                        <div className="tech-and-btn">
                            <ul className="work-tech popupTech">
                                {projectModal.technogies.map((tech, index) => (
                                    <li className="tech-items" key={index}>{tech}</li>
                                ))}
                            </ul>
                            <span className="button-container">
                                <button type="button" className="popupBtn see-project btnHover btnPressed">
                                  <a href={projectModal.demoLink}> See live  </a>
                                </button>
                                <button type="button" className="popupBtn see-project btnHover btnPressed">
                                  <a href={projectModal.sourceLink}> See Source </a>
                                </button>
                        </span>
                        </div>
                    </div>
                  </div>
                  </span>
               </div>
               )}
               </div>
           ))}
           <div id="back-drop"> </div>
       </>
   )
}

export default ProjectPart
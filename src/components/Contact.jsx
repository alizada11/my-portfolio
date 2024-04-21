import BackToTopButton from "./BackToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = ()=> {
    AOS.init({
        duration: 1200,
      })
      
    return (
        <div className="contact-me for-bg-img" id="contactMe">
            <div className="contact-info" data-aos="fade-up">
                <h2 className="about-me-headline"> Contact me </h2>
                
                <p className="contact-text"> If you have an application you are interested in developing, a feature that you need built or a project that needs coding. 
                    I’d love to help with it!</p>
                <div className="form-container">
                    <form action="https://formspree.io/f/xpzenazb" method="post" id="contact-form">
                        <div className="form-field">
                            <input type="text" id="name" maxLength="30" name="name" placeholder="Full name " required />
                        </div>
                        <div className="form-field">
                            <input type="email" id="email" name="email" placeholder="example@gmail.com" required />
                        </div>
                    
                        <div className="form-field">
                            <textarea id="message" maxLength="500" name="message" placeholder="Write your message here..." rows="6" required></textarea>
                        </div>
                        <button type="submit" className="see-project get-intouch btnHover btnPressed btnDisabled" id="submit-button"> Get in touch </button>
                        <div id="error-msg" className="error-message"></div>
                    </form>
                </div>
            </div>
            <BackToTopButton />
        </div>

    )
}

export default About
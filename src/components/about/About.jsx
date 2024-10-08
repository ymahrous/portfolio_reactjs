import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import ME from "../../assets/me-about.jpg";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return(
    <section id="about">
      <h5 className="about__h5">Get to Know</h5>
      <h2 className="about__h2">About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={ME} alt="about img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>70+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem eveniet incidunt quas hic vel repellendus quae possimus pariatur. Temporibus nihil dolor optio sunt nobis, expedita labore quam.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
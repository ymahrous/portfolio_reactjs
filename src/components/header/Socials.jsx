import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";

const Socials = () => {
  return(
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
        </a>
        <a href="https://dribble.com" target="_blank" rel="noreferrer">
            <FiDribbble />
        </a>
    </div>
  );
};

export default Socials;
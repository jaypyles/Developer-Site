import uab from "../images/IMG_2006.jpeg";
const About = () => {
  return (
    <div className="about">
      <div className="about summary">
        <div className="about img">
          <img className="img uab" src={uab} alt="UAB" />
        </div>
        <div className="about text">
          <h2>About </h2>
          <p>
            I am a Computer Science student at the University of Alabama at
            Birmingham. I'm currently a Software Developer and IT Specialist at
            the{" "}
            <a
              href="https://www.uab.edu/cas/home/research/areas-of-expertise/computing-cyber-security"
              className="italic link"
            >
              UAB Computer Forensics Research Lab
            </a>
            . I also have around two years of experience in OSINT Analysis from
            my time working as a Cybercrime Analyst in the lab.
          </p>
          <p>
            I currently work most with React, Python, Postgres SQL, Docker, and
            other full-stack development tools/technologies.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;

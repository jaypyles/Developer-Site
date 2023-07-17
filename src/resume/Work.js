function Work() {
  return (
    <div className="work">
      <h2>Work Experience</h2>
      <hr />
      <h3>
        <a
          href="https://example.com"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Computer Forensics Research Lab at UAB
        </a>
      </h3>
      <p className="work cfrl description"> What this even is</p>
      <ul>
        <li>
          <h4>Software Developer</h4>
        </li>
        <p className="work date">April 2023 - Present</p>
        <p>What im doing</p>
        <li>
          <h4>IT Specialist</h4>
        </li>
        <p className="work date">October 2022 - Present</p>
        <p>What im doing</p>
        <li>
          <h4>Cybercrime Analyst</h4>
        </li>
        <p className="work date">December 2021 - April 2023</p>
        <p>What i was doin</p>
      </ul>
    </div>
  );
}
export default Work;

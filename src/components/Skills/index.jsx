import "./style.css";

const About = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Web Dev:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>JqueryUI</li>
          <li>Webflow</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>Foundation CSS</li>
          <li>React.js</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>AWS</li>
          <li>IBM Cloud</li>
          <li>Git & Github</li>
        </div>
        <div>
        <strong>Database:</strong>
          <li>MySQL</li>
          <li>PL/SQL</li>
          <li>JDBC</li>
        </div>
        <div>
        <strong>Programming Languages:</strong>
          <li>C++</li>
          <li>C</li>
          <li>Java Core</li>
          <li>Python</li>
        </div>
      </div>
    </div>
  );
};

export default About;

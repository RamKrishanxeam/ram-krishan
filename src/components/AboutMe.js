import React from "react";
import "./AboutMeStyle.css";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div class="aboutMe-text">
        <h3>Hey there, 👋</h3>
        <p>
          Dynamic <span>React Developer</span> with{" "}
          <span>3+ years of experience</span> specializing in{" "}
          <span>responsive, user-friendly interfaces</span>. Skilled in{" "}
          <span>
            {" "}
            HTML, CSS, JavaScript, React.js, Next.js, and UI/UX design tools
            like Figma
          </span>
          . Proficient in <span>state management using Redux</span> and{" "}
          <span>integrating APIs</span>. Experienced in{" "}
          <span>version control with Git and GitHub</span>. Completed{" "}
          <span>advanced courses in web development and React.js</span>. Strong{" "}
          background in developing <span>dynamic applications</span>,
          <span>optimizing performance</span>, and ensuring{" "}
          <span>cross-browser compatibility</span>. Adept at leveraging{" "}
          <span>modern JavaScript frameworks</span> to build{" "}
          <span>efficient, reusable components</span>. Passionate about writing{" "}
          <span>clean, maintainable code</span> and implementing{" "}
          <span>best practices in front-end development</span>.
        </p>

        <p>
          Currently working at <span>Xeam Ventures Pvt Ltd</span>, contributing{" "}
          to <span>scalable web solutions</span> and collaborating in{" "}
          <span>agile teams</span>. Actively involved in enhancing{" "}
          <span>application performance</span> through{" "}
          <span>code optimization and lazy loading techniques</span>.{" "}
          Experienced in <span>debugging complex issues</span> and delivering{" "}
          <span>seamless user experiences</span> across devices. Skilled in
          translating <span>Figma designs</span> into{" "}
          <span>pixel-perfect, interactive interfaces</span>. Regularly{" "}
          participate in <span>code reviews</span> to ensure{" "}
          <span>quality and consistency</span> in team projects. Proficient in{" "}
          using <span>TypeScript</span> to enhance{" "}
          <span>code reliability and maintainability</span>. Committed to{" "}
          staying updated with the latest industry trends, including{" "}
          <span>React hooks and functional components</span>. Demonstrated{" "}
          ability to <span>mentor junior developers</span> and share knowledge
          effectively within the team.
        </p>
      </div>
    </div>
  );
}

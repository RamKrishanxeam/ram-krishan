import React from "react";
import "./AboutMeStyle.css";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        <p>
          I’m a dedicated full-time freelancer and{" "}
          <span>Senior Full-Stack Developer</span> with{" "}
          <span>5+ years of experience</span> building high-performance web and
          mobile applications using <span>React.js</span> and{" "}
          <span>React Native</span>. Passionate about transforming ideas into{" "}
          <span>seamless digital experiences</span> — from{" "}
          <span>responsive UIs</span> to{" "}
          <span>scalable, production-ready applications</span> that deliver
          exceptional user experiences and business value.
        </p>

        <p>
          I specialize in <span>React.js</span>, <span>Next.js</span>,{" "}
          <span>Node.js</span>, and <span>Express.js</span>, with strong skills
          in <span>TypeScript</span>, <span>Redux Toolkit</span>,{" "}
          <span>Zustand</span>, and <span>REST/GraphQL API integrations</span>.
          Experienced in <span>UI/UX design</span> using{" "}
          <span>Figma and Adobe XD</span>, I craft{" "}
          <span>pixel-perfect, responsive, and user-friendly interfaces</span>{" "}
          with frameworks like <span>Tailwind CSS</span>, <span>Bootstrap</span>
          , and <span>Material UI</span>.
        </p>

        <p>
          Skilled in <span>backend development</span> with{" "}
          <span>Node.js, Express.js, MongoDB, and MySQL</span>, I also handle{" "}
          <span>authentication</span> (JWT, OAuth, Firebase Auth) and{" "}
          <span>cloud deployments</span> on platforms like{" "}
          <span>AWS, Vercel, Render, and Firebase Hosting</span>. I ensure{" "}
          <span>clean, maintainable, and scalable code</span> through{" "}
          <span>best practices</span> and thorough{" "}
          <span>testing using Jest and React Testing Library</span>.
        </p>

        <p>
          Known for my <span>strong UI/UX sense</span>,{" "}
          <span>proactive communication</span>, and{" "}
          <span>problem-solving mindset</span>, I deliver projects with{" "}
          <span>precision, performance, and reliability</span>. I provide{" "}
          <span>free 45-day post-project support</span> and maintain{" "}
          <span>transparency, dedication, and excellence</span> in every
          collaboration.
        </p>
      </div>
    </div>
  );
}

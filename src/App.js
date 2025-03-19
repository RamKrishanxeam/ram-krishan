import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#F94892",
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="Transforming the Flooring Industry with Generative AI"
          projectDesc="RARA AI, powered by VISUALEZ, revolutionizes the flooring industry by providing advanced generative AI solutions for design, selection, and installation optimization. Improve efficiency and reduce costs while ensuring a personalized and seamless flooring experience."
          projectLink=""
          deployedProjectLink="https://chatbot-gules-gamma.vercel.app"
          projectImg={require("./images/projectWiggles.jpg")}
        />

        <ProjectCard
          projectTitle="AI-Driven Learning: Smarter Exam Preparation"
          projectDesc="Transform the way you prepare for competitive and academic exams with AI-driven insights, personalized feedback, and adaptive support tailored to your learning needs."
          projectLink=""
          deployedProjectLink="https://studybot.in/"
          projectImg={require("./images/projectGlassmorphism.png")}
        />

        <ProjectCard
          className="odd"
          projectTitle="JobSeeker: Discover 5000+ Job Opportunities"
          projectDesc="A platform designed to help job seekers find their next career opportunity. Whether you're passionate about startups or looking for roles in UI design, UX research, Android development, or administration, JobSeeker makes job discovery easier."
          projectLink=""
          deployedProjectLink="https://jobpunjab.vercel.app/"
          projectImg={require("./images/projectRogfree.png")}
        />
        <AboutMe id="about" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;

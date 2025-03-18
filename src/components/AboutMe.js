import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div class="aboutMe-text">
        <h3>Hey there, 👋</h3>
        <p>
          It’s great to learn about your background and your passion for both
          <span> web development </span> and <strong>art</strong>! You’ve got a
          solid approach to building websites with a focus on
          <span> responsiveness </span>, <strong>accessibility</strong>, and
          <strong>aesthetics</strong>. The combination of
          <span> front-end </span> and <strong>back-end</strong> skills is a
          great way to stay versatile in the tech world.
        </p>

        <p>
          It sounds like you’re juggling multiple interests, which is awesome!
          Creativity in art often translates really well into
          <span> web design </span>, especially when it comes to visual
          aesthetics and <span> user experience </span>. Plus, the skills you're
          honing in <span> React </span> and backend technologies will
          definitely allow you to create more dynamic and robust web
          applications.
        </p>

        <p>
          I also noticed you're involved in <span> Abhishek College </span>
          and have some connection to <span> MRSPTU in Bathinda </span>. Is that
          where you're studying or working right now? How's the transition from
          front-end to back-end development going for you?
        </p>

        <p>
          Feel free to
          <a
            className="resume"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            explore my resume.
          </a>
          share more about what projects you're working on right now!
        </p>
      </div>
    </div>
  );
}

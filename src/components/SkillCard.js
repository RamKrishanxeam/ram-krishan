import React from "react";
import "./SkillCardStyle.css";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiVercel,
  SiNetlify,
  SiJira,
  SiRedux,
  SiMaterialdesign,
  SiChakraui,
} from "react-icons/si";

import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandNextjs,
} from "react-icons/tb";
import { IoLogoNpm } from "react-icons/io";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <abbr title="HTML 5">
              <TbBrandHtml5 className="techLogo" />
            </abbr>
            <abbr title="JavaScript">
              <TbBrandJavascript className="techLogo" />
            </abbr>
            <abbr title="Typescript">
              <SiTypescript className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Backend</h2>
          <div className="skillset">
            <abbr title="Firebase">
              <SiFirebase className="techLogo" />
            </abbr>
            <abbr title="Mongodb">
              <SiMongodb className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <abbr title="ReactJS">
              <SiReact className="techLogo" />
            </abbr>
            <abbr title="Nextjs">
              <TbBrandNextjs className="techLogo" />
            </abbr>

            <abbr title="CSS 3">
              <TbBrandCss3 className="techLogo" />
            </abbr>
            <abbr title="Bootstrap">
              <SiBootstrap className="techLogo" />
            </abbr>
            <abbr title="Tailwindcss">
              <SiTailwindcss className="techLogo" />
            </abbr>
            <abbr title="Materialdesign">
              <SiMaterialdesign className="techLogo" />
            </abbr>
            <abbr title="Chakraui">
              <SiChakraui className="techLogo" />
            </abbr>
            <abbr title="Redux">
              <SiRedux className="techLogo" />
            </abbr>
            <abbr title="NPM">
              <IoLogoNpm className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Tools & Systems</h2>
          <div className="skillset">
            <abbr title="Visual Studio Code">
              <SiVisualstudiocode className="techLogo" />
            </abbr>
            <abbr title="Figma">
              <SiFigma className="techLogo" />
            </abbr>
            <abbr title="Vercel">
              <SiVercel className="techLogo" />
            </abbr>
            <abbr title="Netlify">
              <SiNetlify className="techLogo" />
            </abbr>
            <abbr title="Jira">
              <SiJira className="techLogo" />
            </abbr>

            <abbr title="Git/Github">
              <DiGit className="techLogo" />
            </abbr>
          </div>
        </div>
      </div>
    </>
  );
}

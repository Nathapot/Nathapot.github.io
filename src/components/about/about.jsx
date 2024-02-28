import "./about.css";
import Me from "../../img/Potto.JPG";
import experience from "../../img/experience.png";
// import React, { useEffect, useState } from "react";
// import SkeletonArticle from "../skeletons/skeletonArticle";
// import SkeletonProject from "../skeletons/skeletonProject";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const About = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // const [aboutMe, setAboutMe] = useState(null);
  // const [project, setProject] = useState(null);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  //     const data = await res.json();
  //     setAboutMe(data);
  //     setProject(true);
  //   }, 3000);
  // }, []);

  return (
    <div className="a">
      <div className="a-left">
        <div
          className="a-card bg"
          style={{
            backgroundColor: darkMode ? "#555" : "#333",
          }}
        ></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <div>
          <p className="a-sub">Hi, this is Nathapot.</p>

          <p className="a-desc">
            I am a software engineer with a strong enthusiasm for coding,
            showcasing skills in various domains such as web development and
            data sciences. My approach is characterized by a positive and
            creative mindset, a deep passion for coding, and an ongoing
            eagerness to learn. Proficient in both Thai and English, I excel in
            human relations, contributing to efficient and effective
            performances, as well as fostering high-quality teamwork.
          </p>
        </div>

        {/* {aboutMe ? (
          <div>
            <p className="a-sub">{aboutMe.title}</p>

            <p className="a-desc">{aboutMe.body}</p>
          </div>
        ) : (
          <SkeletonArticle />
        )} */}

        <div className="a-award">
          <img src={experience} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Experience</h4>
            {/* <p className="a-award-desc">Desc Desc Desc Desc</p> */}
            <ul>
              <li className="a-award-desc">
                Software Engineer At SCB TechX | Feb 2024 - Present
              </li>
              <li className="a-award-desc">
                Associate Software Engineer At SCB TechX | Sep 2022 - Jan 2024
              </li>
              <li className="a-award-desc">
                Full Stack Developer (Part-time) At Easysale | June 2021 - Aug
                2021
              </li>
              <li className="a-award-desc">
                Data scientist (Internship) At Botnoi Consulting Co.,Ltd. | June
                2021 - July 2021
              </li>
            </ul>
          </div>
        </div>

        {/* {project ? (
          <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Test Test</h4>
              <p className="a-award-desc">Desc Desc Desc Desc</p>
            </div>
          </div>
        ) : (
          <SkeletonProject />
        )} */}
      </div>
    </div>
  );
};

export default About;

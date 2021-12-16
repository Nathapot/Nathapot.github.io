import "./about.css";
import Me from "../../img/Potto.JPG";
import Award from "../../img/Project_GPR.jpg";
import React, { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/skeletonArticle";
import SkeletonProject from "../skeletons/skeletonProject";

const About = (props) => {
  // const [iconProfile, setIconProfile] = useState(null);
  const [aboutMe, setAboutMe] = useState(null);
  const [project, setProject] = useState(null);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/photos/1");
  //     const data = await res.json();
  //     setIconProfile(data);
  //   }, 3000);
  // });

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await res.json();
      setAboutMe(data);
      setProject(true);
    }, 3000);
  }, []);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/photos/1");
  //     const data = await res.json();
  //     setProject(data);
  //   }, 3000);
  // });

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>

        {aboutMe ? (
          <div>
            <p className="a-sub">{aboutMe.title}</p>

            <p className="a-desc">{aboutMe.body}</p>
          </div>
        ) : (
          <SkeletonArticle />
        )}

        {project ? (
          <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Test Test</h4>
              <p className="a-award-desc">Desc Desc Desc Desc</p>
            </div>
          </div>
        ) : (
          <SkeletonProject />
        )}

        {/* {project && (
          <div className="a-award">
            <img src={project.thumbnailUrl} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">{project.title}</h4>
              <p className="a-award-desc">{project.title}</p>
            </div>
          </div>
        )}
        {!project && [1].map((n) => <SkeletonProject key={n} />)} */}
      </div>
    </div>
  );
};

export default About;

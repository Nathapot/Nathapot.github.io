import "./intro.css";
import Me from "../../img/pottoIcon.png";

const Intro = () => {


  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Nathapot</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Responsive Websites</div>
              <div className="i-title-item">Web Apps</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Artificial Intelligence</div>
              <div className="i-title-item">Data Science</div>
              <div className="i-title-item">DevOps</div>
            </div>
          </div>
          <p className="i-desc">
            An engineering student pursuing a career as a full-stack developer
            through self-study
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

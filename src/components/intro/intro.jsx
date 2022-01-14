import "./intro.css";
import Me from "../../img/pottoIcon.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Nathapot Pornpitakpan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Responsive Websites</div>
              <div className="i-title-item">Web Apps</div>
              {/* <div className="i-title-item">UI/UX Designer</div> */}
              <div className="i-title-item">Artificial Intelligence</div>
              <div className="i-title-item">Data Sciences</div>
              <div className="i-title-item">DevOps</div>
            </div>
          </div>
          <p className="i-desc">
            A fourth-year engineering student at Faculty of Engineering, King
            Mongkut's Institute of Technology Ladkrabang. Skillful in several
            fields such as web development and data sciences.
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

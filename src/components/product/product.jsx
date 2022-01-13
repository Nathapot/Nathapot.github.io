import "./product.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Product = ({ img, link }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="p" style={{ border: darkMode && "2px #333 solid" }}>
      <div className="p-browser">
        <div className="p-circle-r"></div>
        <div className="p-circle-y"></div>
        <div className="p-circle-g"></div>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      {/* <div className="p-topic">test</div> */}
    </div>
  );
};

export default Product;

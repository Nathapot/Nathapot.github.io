import "./product.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Product = ({ title, img, link }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="p" style={{ border: darkMode && "2px #333 solid" }}>
      <div className="p-browser">
        <div className="p-circle-r"></div>
        <div className="p-circle-y"></div>
        <div className="p-circle-g"></div>
        <d className="p-topic">{title}</d>
      </div>

      <a
        style={{ pointerEvents: "none" }}
        /*href={link}*/ /*target="_blank"*/ rel="noreferrer"
      >
        <img src={img} alt="" className="p-img" />
      </a>
      {/* <div className="p-topic">test</div> */}
    </div>
  );
};

export default Product;

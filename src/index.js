import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Book = () => {
  return (
    <div className="book">
      <All />
      <All />
      <All />
    </div>
  );
};
let header = 'Tittle component'
const style1 = {
  color: "green",
  fontSize: "0.8rem",
};
function All() {
  return (
    <div className="all">
      <h1 style={{ color: "tomato", fontSize: "1.1rem" }}>{header}</h1>;
      <img src="./images/img1.png" alt="img1" />      
      <p style={style1}>Author component</p>;
    </div>
  );
}

export default Book;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Book />);

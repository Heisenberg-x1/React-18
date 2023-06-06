import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const Book = () => {
  return (
    <div className="book">
      <All />
      <All />
      <All />
    </div>
  );
};

function All() {
  return (
    <div className="all">
      <Title />
      <Image />
      <Author />
    </div>
  );
}

export default Book;

const Title = () => <h1>Tittle component</h1>;
const Image = () => <img className="image" src="https://m.media-amazon.com/images/I/510kE17yuNS.jpg" alt="Book Image" />
const Author = () => <p>Author component</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Book />);

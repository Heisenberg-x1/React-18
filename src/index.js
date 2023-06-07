import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let laptop1 = {
  name: "Mate book 14s",
  image: "https://i.ebayimg.com/images/g/t5EAAOSwPkljCJ-k/s-l500.jpg",
  price: "$1200",
  description:
    "HUAWEI MateBook 14S 2022 12th Gen Core Laptop 14.2 inch 2.5K Touch Screen 90Hz",
};
let laptop2 = {
  name: "HP Envy x360",
  image: "https://i.ebayimg.com/images/g/t5EAAOSwPkljCJ-k/s-l500.jpg",
  price: "$800",
  description:
    "NEW HP Envy x360 15.6' FHD Intel Core i5 256GB SSD 8GB RAM 2-in-1 Design Win 10",
};
let laptop3 = {
  name: "Huawei MateBook X Pro",
  image: "https://i.ebayimg.com/images/g/4-oAAOSwwQdkb4jd/s-l300.jpg",
  price: "$1900",
  description:
    "HUAWEI MateBook X Pro 2023 13th Gen Core Laptop 14.2 inch 3.1K Touch Screen",
};
const Book = () => {
  return (
    <div className="laptop-Container">
      <Laptop
        name={laptop1.name}
        img={laptop1.image}
        price={laptop1.price}
        description={laptop1.description}
      />
      <Laptop
        name={laptop2.name}
        img={laptop2.image}
        price={laptop2.price}
        description={laptop2.description}
      />
      <Laptop
        name={laptop2.name}
        img={laptop2.image}
        price={laptop2.price}
        description={laptop2.description}
      />
      <Laptop
        name={laptop3.name}
        img={laptop3.image}
        price={laptop3.price}
        description={laptop3.description}
      />
      <Laptop
        name={laptop2.name}
        img={laptop2.image}
        price={laptop2.price}
        description={laptop2.description}
      />
      <Laptop
        name={laptop3.name}
        img={laptop3.image}
        price={laptop3.price}
        description={laptop3.description}
      />
      <Laptop
        name={laptop2.name}
        img={laptop2.image}
        price={laptop2.price}
        description={laptop2.description}
      />
      <Laptop
        name={laptop3.name}
        img={laptop3.image}
        price={laptop3.price}
        description={laptop3.description}
      />
      <Laptop
        name={laptop2.name}
        img={laptop2.image}
        price={laptop2.price}
        description={laptop2.description}
      />
      <Laptop
        name={laptop3.name}
        img={laptop3.image}
        price={laptop3.price}
        description={laptop3.description}
      />
    </div>
  );
};
const style1 = {
  color: "green",
  fontSize: "01rem",
  textAlign: "center",
  paddingTop: "10px",
};
function Laptop(props) {
  return (
    <div className="laptop">
      <h3>{props.name}</h3>
      <div className="laptop-img">
        <img src={props.img} alt="" />
      </div>
      <section className="laptop-description">
        <p>{props.description}</p>
        <p style={style1}>price : {props.price}</p>
      </section>
  <div className="buy-now"alert-dismissible>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default Book;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Book />);

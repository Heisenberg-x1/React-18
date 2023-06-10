import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let laptops = [
  {
    name: "Mate book 14s",
    image: "https://i.ebayimg.com/images/g/t5EAAOSwPkljCJ-k/s-l500.jpg",
    price: "$1200",
    description:
      "HUAWEI MateBook 14S 2022 12th Gen Core Laptop 14.2 inch 2.5K Touch Screen 90Hz",
  },

  {
    name: "Huawei MateBook X Pro",
    image: "https://i.ebayimg.com/images/g/4-oAAOSwwQdkb4jd/s-l300.jpg",
    price: "$1900",
    description:
      "HUAWEI MateBook X Pro 2023 13th Gen Core Laptop 14.2 inch 3.1K Touch Screen",
  },
  {
    name: "HP Envy x360",
    image: "https://i.ebayimg.com/images/g/t5EAAOSwPkljCJ-k/s-l500.jpg",
    price: "$800",
    description:
      "NEW HP Envy x360 15.6' FHD Intel Core i5 256GB SSD 8GB RAM 2-in-1 Design Win 10",
  },
];
const Book = () => {
  return (
    <div className="laptop-Container">
      <section>
        {laptops.map((laptop) => (
          <Laptop
            key={laptop.name}
            name={laptop.name}
            image={laptop.image}
            price={laptop.price}
            description={laptop.description}
          />
        ))}
      </section>
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
  const { name, image, price, description } = props;
  return (
    <div className="laptop">
      <h3>{name}</h3>
      <div className="laptop-img">
        <img src={image} alt="" />
      </div>
      <section className="laptop-description">
        <p>{description}</p>
        <p style={style1}>price : {price}</p>
      </section>
      <div className="buy-now" alert-dismissible>
        <button>Buy Now</button>
      </div>
      {/* {props.children} */}
    </div>
  );
}

export default Book;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Book />);

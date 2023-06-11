The es7 extension has some useful snippets

<!-- !SNIPPETS -->

(i) rafc - js arrow fn
(ii) rfce - js normal fn

- Components start in upper

- We can also create elements by calling the react.createElement function as follows

<!-- *CreateElement -->

` return React.createElement('h1', {}, 'Hello React community');`

- We should always return one element

- Use React.Fragments to group all the elements w/o adding extra nodes

```javascript
return (
  <React.Fragment>
    <header>
      <ul className="border">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  </React.Fragment>
);
```

<!-- *Naming convention and jsx rules -->

- camel case
- class in html is className
- for in html is htmlFor
- Always have the opening tag in the same line as the return statement otherwise it wont work. You can use parethesis tho

<!-- *Nesting the components-->

- The components can be nested easily as follows

```javascript
const Book = () => {
  return (
    <div>
      <All />
    </div>
  );
};

function All() {
  return (
    <div>
      <Title />
      <Image />
      <Author />
    </div>
  );
}

export default Book;

const Title = () => <h1>Tittle component</h1>;
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/510kE17yuNS.jpg"
    alt="Book Image"
  />
);
const Author = () => <p>Author component</p>;
```

<!-- *Adding CSS -->

- We create a css file inside the src folder. We can also create all th css files inside one folder, just need to change the path
- Add a class that needs styling, well a className is added. Then style the element normally inside the css file

<!-- *Images -->

- We can use both external images and local images. External images, we need only the address to the image
- For local image, we can create a folder for the images inside the public dir . To access the image, we just use the path foldername/image. No need to add the public folder name etc . REASON: Since the asset we are trying to access, we do not need the full address

```htm
<img src="./images/img1.png" alt="img1" />
```

<!-- *Adding internal css in the jsx -->

- We achieve so by using js objects
- Note that we use camelCase and we need two curly braces if we do it directly

```javascript
const Title = () => (
  <h1 style={{ color: "tomato", fontSize: "1.1rem" }}>Tittle component</h1>
);
```

- The indirect way involves creating a style object as follows:

```javascript
const style1 = {
  color: "green",
  fontSize: "0.8rem",
};
const Author = () => <p style={style1}>Author component</p>;
```

- We can also create the content of a tag inside a variable and reference it in the tag

```javascript
let header = 'Tittle component'
 <h1 style={{ color: "tomato", fontSize: "1.1rem" }}>{header}</h1>;
```

<!-- *Props -->

props(properties) is a way of passing data from the parent component to the children component. It facilitates the re usage of a component by passing different data

```javascript
function All(props) {
  return (
    <div className="all">
      <h1 style={{ color: "tomato", fontSize: "1.1rem" }}>{props.title}</h1>
      <img src={props.img} alt="img1" />
      <p style={style1}>{props.description}</p>
    </div>
  );
}
// We can now call the component in the main component as follows with the props passed
<All
  title="Book1"
  img="./images/book1.png"
  description="Random description of the book."
/>;
```

<!-- *CHILDREN PROPS -->

-If we want to add extra elements to a specific component, we cannot do so by adding it to the main component. This will cause all the instances of the rendered component to have the extra elements, which are only needed in a specific instance. To achieve this we will need a specific type of props called CHILDREN PROPS.

- First we add the extra element. e.g., a button, between the opening and closing tags of that specific instance of the component. {Note that when rendering components normally, we do not need a closing tag}

```javascript
<Laptop
  name={laptop3.name}
  img={laptop3.image}
  price={laptop3.price}
  description={laptop3.description}
>
  <p>This is an extra element</p>
</Laptop>
```

- Then we add the children prop in the main component between curly braces as follows

```javascript
 <div className="buy-now" alert-dismissible>
        <button>Buy Now</button>
      </div>
      {props.children}
    </div>
```

<!-- *USING ARRAY MAP METHOD  -->

- We can effectively use the array.Map method to render the component as many times as we have the dat. This is a great idea since it saves us the work of writing too much code repetition
- First we put all the properties of the laptop inside an array, well, an Array of objects
- Then we run a map function on the array. For each array Item we return the laptop component. Since the function expects some props, we need to provide them.

```javascript
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
```

<!-- *THE KEY PROP IN JS -->
-The key prop in js helps  React identify which object has been changed, added or removed. It should be a string or a number. 
- We can create an array of objects, and add one more object for the Id, we will use this as the key
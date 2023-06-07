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

`return <React.Fragment>

<header>
<ul className="border">
<li>Home</li>
<li>About</li>
<li>Contact</li>
</ul>
</header>

    </React.Fragment>;`

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

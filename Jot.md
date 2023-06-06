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
- We create a css file inside the src folder. We can also create all th css files inside  one folder, just need to change the path
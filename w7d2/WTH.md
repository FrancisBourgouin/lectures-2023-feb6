# What was hard

- Props and component interaction
- State (Later)
- Props.children
- BEM styling

JSX => Tastes like HTML, Smells like HTML, Looks like HTML, BUT ITS NOT!

JSX => JS Markup (JS XML)

EJS => HTML mixed with JS <%= %>

JSX => <p>Hello!</p> => React.DOM.createElement("p", {content:"Hello"})

jQuery => const $p = $("<p>>").text("balalalalala")

<p className="bob" onChange={}>Name</p>

Component (React)

const SomeComponent = (props) => {
return <h1>name</h1>
}

$.ajax({
url:"",
method:"",
})

SomeComponent({name:"bob"})

<SomeComponent name="bob" />

<SomeComponent>
  <h1>Something</h1>
</SomeComponent>

props.children

<header>
  <h1>Something</h1>
</header>

import * as React from 'react';



// note to remember
// App, List, and Search use arrow function syntax and omit return statement
// because no other logic is performed
const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];  
  
  return(
    <div>
      <h1>My Hacker Stories</h1>

      <Search />
    
      <hr />
      <List list={stories}/>
    </div>
  );
  }


const List = (props) => (
  <ul>
    {props.list.map((item) => {
      return <Item key={item.objectID} item={item} /> 
    })}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

const Search = () => {
  const handleChange = (event) => {
    //synthetic event
    console.log(event);
    //value of target  (here: element)
    console.log(event.target.value);
  };
  
  return(
    <div>
      <label htmlFor="search">Search: </label>
      {/* Note: only pass function (e.g. handleChange), not a function call (e.g. handleChange()) */}
      <input id="search" type = "text" onChange={handleChange}/>
    </div>
  );
};

export default App;

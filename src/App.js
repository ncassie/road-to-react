import * as React from 'react';



// note to remember
// App, List, and Search use arrow function syntax and omit return statement
// because no other logic is performed
const App = () => {
  console.log('App renders');

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

  let [searchTerm, setSearchTerm] = React.useState('');
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return(
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch}/>
    
      <hr />
      <List list={searchedStories}/>
    </div>
  );
  }


const List = (props) => {
  console.log('List renders');  
  return (
    <ul>
      {props.list.map((item) => {
        return <Item key={item.objectID} item={item} /> 
      })}
    </ul>
  );
}

const Item = (props) => {
  console.log('Item renders');
  return(
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
   </li>
  );
}

const Search = (props) => {
  console.log('Search renders');
  
  return(
    <div>
      <label htmlFor="search">Search: </label>
      {/* Note: only pass function (e.g. handleChange), not a function call (e.g. handleChange()) */}
      <input id="search" type = "text" onChange={props.onSearch}/>
    </div>
  );
};

export default App;

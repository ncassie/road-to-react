import * as React from 'react';

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

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

  const [searchTerm, setSearchTerm] = useStorageState(
    'search',
    'React');
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return(
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch}/>
    
      <hr />
      <List list={searchedStories}/>
    </div>
  );
}

const List = ({list}) => {
  console.log('List renders');  
  return (
    <ul>
      {list.map((item) => {
        return <Item key={item.objectID} item={item} /> 
      })}
    </ul>
  );
}

const Item = ({item}) => {
  console.log('Item renders');
  return(
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
   </li>
  );
}

const Search = ({search, onSearch}) => {
  
  return(
    <div>
      <label htmlFor="search">Search: </label>
      {/* Note: only pass function (e.g. handleChange), not a function call (e.g. handleChange()) */}
      <input 
        id="search" 
        type = "text" 
        value={search}
        onChange={onSearch}
      />
    </div>
  );
};

export default App;

import * as React from 'react';

function getTitle(title){
  return title;
}

const welcome={
  greeting: 'Hey',
  title: 'React',
};

function App() {
  

  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <h1>Welcome {getTitle('React')}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type = "text" />
    </div>
  );
}

export default App;

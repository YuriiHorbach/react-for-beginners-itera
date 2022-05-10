import React from 'react';
import './App.css';

const user = {
  first_name: 'Yurii',
  short_biography: 'I want to be fullstack webdeveloper, that`s why I need to learn react',
  public_contacts: 'Ukraine'
}

const App = () => (
    <div className="App"> 
      <h1>Hello {user.first_name}</h1> 
      <h2>My short biography</h2>
      <p>{user.short_biography}</p>
      <hr />
      <p>{user.public_contacts}</p>
    </div>
)


export default App;

import React, { Component } from 'react'
import {CardList} from './components/card/CardList'
import './App.css';
import { Searchbox } from './components/Searchbox';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
      ],
      searchParam: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({monsters: users}))
  }

  search = (e) => {
    this.setState({searchParam: e.target.value})
  }

  render() {
    let {monsters, searchParam} = this.state;
    let filterMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase()));
    
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Searchbox filter={this.search} placeholder="Search monster..." />
        <CardList monsters={filterMonsters}/>
      </div>
    )
  }


}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

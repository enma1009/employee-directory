import React from 'react';
import './App.css';
import PageHeader from './components/header';
import Search from './components/search';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search:""
    }
  }

  

  render() {
    return (
      <Container>
        <PageHeader />
        {/* Search for an employee (search is case sensitive): <input className="mb-4" type="text" value={this.state.search} onChange={(e)=>this.setState({search:e.target.value})} />  */}
        <Search search={this.state.search} />
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { isElement } from 'react-dom/test-utils';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import infoData from './data.json'

class App extends Component {
  state={
    data:[],
    check: false
  }

  componentDidMount(){
    this.setState({data: infoData.data})
  }

  handleClick = (event) => {
    let val = !this.state.check
    this.setState({check:val})
    this.handleChange(event)
    console.log(this.state.check)
  }

  handleChange = (event) => {

    const {value} = event.target
  
    console.log ("que tecleo", value)
   
    let newData = infoData.data.filter((item, index) => {
      if(this.state.check === false){
       return item.name.toLowerCase().includes(value.toLowerCase())
    } else {
    return item.name.toLowerCase().includes(value.toLowerCase()) && item.stocked  
    }
  })
  this.setState({data:newData})
}

   

  


 render(){
   //console.log("this.state", this.state.data)
  return (
    <div className="App">
      <div>
        <h1>IronStore</h1>
      </div>
      <Search handleChange={this.handleChange} handleClick={this.handleClick}/>
      <Table data={this.state.data}/>
    </div>
  );
}
}

export default App;

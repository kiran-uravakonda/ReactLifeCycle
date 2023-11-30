import React from 'react'
import Child from './Components/child'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  render() {
    return (
      <div>
        <h1>Component LifeCycle Methods</h1>
        <Child data={this.state.count}/>
        <button onClick={()=>{this.setState({count:this.state.count+10})}}>click</button>
      </div>
    )
  }
  
}
export default App;

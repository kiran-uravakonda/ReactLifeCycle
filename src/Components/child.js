import React from 'react'
class Child extends React.Component {
  constructor(props){
    super(props)
      this.state={
        value:0,
        product:''
      }
      console.log("constructor method")
  }

  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps method")
      return {
        value:props.data+10
      }

    // return null
  }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {this.setState({product:data.title})})
   
}

  render() {
    return (
      <div>
        <h1>this is child component</h1>
        <h1>count is:{this.props.data}</h1>
        <h1>value is:{this.state.value}</h1>
        <h1>product is:{this.state.product}</h1>
      </div>
    )
  }
  
}
export default Child;

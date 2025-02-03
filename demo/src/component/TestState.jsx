import React from "react";
class TestState extends React.Component {
 constructor(props) {
  super(props);
  
  this.state = {
   count: 0,
  };
 }
 
 render () {
  
  setTimeout(() => {
   this.setState({count : this.state.count + 1})
  }, 1000)
  
  return (
   <div>
    <p> Counter : {this.state.count} </p>
   </div>
  )
 }
 
}

export default TestState;
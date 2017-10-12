// // Code SimplerComponentHere Here
// import React from "react"
//
// class SimplerComponent extends React.Component{
//   render(){
//     return(
//       <div class="simpler-component" onClick={this.props.handleClick}>I am just happy</div>
//     )
//   }
// }
//
// export default SimplerComponent
import React from "react"

const SimplerComponent = function(props) {
  return (<div class="simpler-component" onClick={this.props.handleClick}>I am just happy</div>)
}
export default SimplerComponent

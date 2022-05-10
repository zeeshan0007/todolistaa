import React, { Component } from 'react';
class TodoRows extends Component {
 
	
  fooUpdate=(id)=>{
  
    this.props.test(id)
  }
  moveUp=()=>{
     this.props.moveUp(this.props.index)
     
   }
   moveDown=()=>{
    
     this.props.moveDown(this.props.index)
   }
	render () {
  

    return (
      <tr>
        <td>{this.props.item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={this.props.item.done}
            onChange={() => this.props.callback(this.props.item)}
          />
         
          <button onClick={() => {this.props.fooDelete(this.props.item.id)}} className="btn btn-danger btn-sm">Delete</button>
          <button onClick={()=>{this.fooUpdate(this.props.item.id)}} className="btn btn-yellow btn-sm">Update</button> 
          <button onClick={()=>{this.moveUp(this.props.item.id)}} className="btn btn-yellow btn-sm">Move Up</button> 
          <button onClick={()=>{this.moveDown(this.props.item.id)}} className="btn btn-yellow btn-sm">Move Down</button> 
        </td>
      </tr>
    );
  }
  }
 
export default TodoRows;
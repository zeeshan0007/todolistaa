import React, { Component } from 'react';
class TodoRows extends Component {
 

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
          {/* <button onClick={()=>{this.props.fooUpdate(this.props.item.id)}} className="btn btn-yellow btn-sm">Update</button> */}
        </td>
      </tr>
    );
  }
  }
 
export default TodoRows;
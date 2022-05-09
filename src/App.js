import React, { Component } from 'react';
import Navbar from './components/NavBar';
import TodoRows from './components/ToDoRows';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: `Zeeshan`,
			todoItems: [
				{id:1, action: 'Buy Milk', done: true },
				{id:2, action: 'Dentist at 5pm', done: false },
				{id:3, action: 'Go to Gym', done: false },
			],
			newTodo: '',
		};
	}

	updateValue = (event) => {
      this.setState({ newTodo: event.target.value });
	};

	HandleAddClick = () => {
    
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newTodo, done: false },
        ],
      });
	};

  // setUpdate(key){
  //   console.log("items:"+this.state.todoItems);
  //   const items = this.state.items;
  //   items.map(item=>{      
  //     if(item.key===key){
  //       console.log(item.key +"    "+key)
  //       item.text= text;
  //     }
  //   })
  //   this.setState({
  //     items: items
  //   })
  // }

	todoRows = () =>
		this.state.todoItems.map((item) => (
			<TodoRows key={item.id} item={item} callback={this.toggleDone} fooDelete={(todo) => this.handleDelete(todo)} />
		));

	toggleDone = (todo) =>
		this.setState({
			todoItems: this.state.todoItems.map((item) =>
				item.action === todo.action ? { ...item, done: !item.done } : item
			),
		});

    handleDelete = todo => {
      console.log(this.state.todoItems);
     
      const todos = this.state.todoItems.filter((t) => {
          return t.id !== todo
      });
      
      this.setState((state) => ({
        ...state, todoItems: todos 
      }));
  }
  

    getTime() {
      let d = new Date();
      var n = d.getTime();
      return n;
  }

	render = () => (
		<div className="container">
			<div className="row">
				<Navbar name={this.state.userName} />
				<div className="col-12">
					<input
						className="form-control"
						value={this.state.newToDo}
						onChange={this.updateValue}
					/>
					<button className="btn btn-primary" onClick={this.HandleAddClick}>
						Add
					</button>
				</div>
				<div className="col-12">
					<table className="table">
						<thead>
							<tr>
								<th>Task</th>
								<th>Complete</th>
              
							</tr>
						</thead>
						<tbody>{this.todoRows()}</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

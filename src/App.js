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
			newTodo : '',
			updateId:'',
		};
	}

	updateValue = (event) => {
      this.setState({ newTodo: event.target.value });
	};

	HandleAddClick = () => {
			if(this.state.newTodo===''){
				alert('can not assign empty')
				return;
			}
			if(this.state.updateId!==''){
				//console.log(this.state.updateId)
				const update=this.state.todoItems.filter(item=>item.id===this.state.updateId);
				update[0].action=this.state.newTodo
					const tst= this.state.todoItems.map((item,index) => {
					if(item.id === this.state.todoItems) {
							return update[0];
						}
						return item;
					})
				this.setState({todoItems:	tst,updateId:'', newTodo: ''})

			}else {  this.setState({
				todoItems: [
				...this.state.todoItems,
				{id: this.getTime(), action: this.state.newTodo, done: false },
				],
				updateId:''
			});}
	};

  
		test=(id)=>{
		
			const val =this.state.todoItems;
			const update=val.filter(item=>item.id===id);
			this.setState({newTodo:update[0].action, updateId:id})
		}

		handleExit=()=>{

		}
		
	todoRows = () =>
		this.state.todoItems.map((item, index) => (
			<TodoRows index={index} moveUp={this.moveUp} moveDown={this.moveDown} test={this.test} key={item.id} item={item} callback={this.toggleDone} fooDelete={(todo) => this.handleDelete(todo)} />
		));

	toggleDone = (todo) =>
		this.setState({
			todoItems: this.state.todoItems.map((item) =>
				item.action === todo.action ? { ...item, done: !item.done } : item
			),
		});

    handleDelete = todo => {
     // console.log(this.state.todoItems);
     
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

	moveUp=(index)=>{
		if(index===0){
			let oldData = this.state.todoItems
			oldData.push(oldData.splice(index, 1)[0]);
			this.setState(
				{todoItems:oldData}
			)

		}else if(index > 0) {
			let oldData = this.state.todoItems
			let temp = oldData[index]//clicked object wwill be here 
			console.log(temp)
			oldData[index] = oldData[index-1]
			oldData[index-1]=temp
			//console.log(oldData)
			
			this.setState(
				{todoItems:oldData}
			)
			}
		
	}
	moveDown=(index)=>{
		var i=this.state.todoItems.length-1
		if (index === i)
		{
			console.log('move is called', i)
			let oldData = this.state.todoItems
			// oldData.push(oldData.unshift(index, 1)[0]);
			let lastVal=oldData.splice(i)
			console.log(lastVal)
			let data=oldData.unshift(...lastVal)
			console.log(data)
			this.setState(
				{todoItems:oldData}
			)
		}
		else if(index < this.state.todoItems.length-1){
			let oldData = this.state.todoItems
			let temp = oldData[index]
			oldData[index] = oldData[index+1]
			oldData[index+1]=temp
			console.log(oldData)
			
			this.setState(
				{todoItems:oldData}
			)
			}
	

	}
	render = () => (
			<div className="container">
			<div className="row">
				<Navbar name={this.state.userName} />
				<div className="col-12">
					<input
						className="form-control"
						value={this.state.newTodo}
						onChange={this.updateValue}
					/>
					
					<button className="btn btn-primary" onClick={this.HandleAddClick}>
						{this.state.updateId ? 'Update' : 'Add'}
					</button>
					{this.state.updateId && <button
						className="back"
						onClick={() => this.setState({updateId:'', newTodo: ''})}
						type="button">
						Cancel
             		 </button>}
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

import React from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import uuid from 'uuid/v4'
import './TodoList.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { todoList: [] }
    this.addNew = this.addNew.bind(this)
    this.update = this.update.bind(this)
  }
  addNew(task) {
    let newTodo = { task, id: uuid(), isCompleted: false }
    this.setState(st => ({
      todoList: [...st.todoList, newTodo]
    }))
  }
  remove(id) {
    this.setState(st => ({
      todoList: st.todoList.filter(todo => todo.id !== id)
    }))
  }
  update(id, task, isCompleted) {
    let newArr = this.state.todoList.slice()
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].id === id) {
        newArr[i].task = task
        newArr[i].isCompleted = isCompleted ? true : false
      }
    }
    this.setState({ todoList: newArr })
  }
  render() {
    const renderToDoList = this.state.todoList.map(todo => (
      <Todo key={todo.id} task={todo.task} id={todo.id} remove={() => this.remove(todo.id)} updateTask={this.update} isCompleted={todo.isCompleted}/>
    ))

    return (
      <div>
        <h1>Simple Todo list</h1>
        <div className='TodoList'>{renderToDoList}</div>
        <NewTodoForm addNew={this.addNew} />
      </div>
    )
  }
}

export default TodoList

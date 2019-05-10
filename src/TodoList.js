import React from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { todoList: [] }
    this.addNew = this.addNew.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
    this.toggleCompletion = this.toggleCompletion.bind(this)
  }
  addNew(task) {
    this.setState(st => ({
      todoList: [...st.todoList, task]
    }))
  }
  remove(id) {
    this.setState(st => ({
      todoList: st.todoList.filter(todo => todo.id !== id)
    }))
  }
  update(id, task) {
    let updatedTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, task }
      }
      return todo
    })
    this.setState({ todoList: updatedTodoList })
  }
  toggleCompletion(id) {
    let updatedTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      }
      return todo
    })
    this.setState({ todoList: updatedTodoList })
  }

  render() {
    const renderToDoList = this.state.todoList.map(todo => (
      <Todo
        key={todo.id}
        task={todo.task}
        id={todo.id}
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggleCompletion}
        isCompleted={todo.isCompleted} 
      />
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

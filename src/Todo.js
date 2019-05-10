import React from 'react'
import './Todo.css'

class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editingTask: '',
      isEditing: false
    }

    this.editTask = this.editTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.showEditForm = this.showEditForm.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  showEditForm() {
    this.setState({ editingTask: this.props.task, id: this.props.id, isEditing: true })
  }
  editTask(e) {
    e.preventDefault()

    this.setState(st => ({
      editingTask: st.editingTask,
      isEditing: false
    }))

    this.handleUpdate(this.props.id, this.state.editingTask)
  }
  handleUpdate(id, editingTask) {
    this.props.updateTodo(id, editingTask)
  }
  handleToggle() {
    this.props.toggleTodo(this.props.id, this.props.task)
  }
  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.editTask}>
          <input type='text' name='editingTask' id='editingTask'
            value={this.state.editingTask}
            onChange={this.handleChange} />
          <button>Save</button>
        </form>
      )
    } else {
      result = (
        <div className='Todo'>
          <span
            onClick={this.handleToggle}
            className={this.props.isCompleted ? 'Todo-mark-completed' : ''}
          >
            {this.props.task}
          </span>
          <button onClick={this.showEditForm}>Edit</button>
          <button onClick={this.handleRemove}>Remove</button>
        </div>
      )
    }
    return result
  }
}

export default Todo

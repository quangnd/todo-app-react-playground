import React from 'react'
import './Todo.css'

class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editingTask: '',
      id: '',
      isEditing: false,
      isCompleted: false
    }

    this.editTask = this.editTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.showEditForm = this.showEditForm.bind(this)
    this.handleUpdateTask = this.handleUpdateTask.bind(this)
    this.markCompleted = this.markCompleted.bind(this)
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

    this.handleUpdateTask(this.state.id, this.state.editingTask, this.state.isCompleted)
  }
  handleUpdateTask(id, editingTask, isCompleted) {
    this.props.updateTask(id, editingTask, isCompleted)
  }
  markCompleted() {
    this.setState({ isCompleted: !this.props.isCompleted })
    this.handleUpdateTask(this.props.id, this.props.task, !this.props.isCompleted)
  }
  render() {
    const isEditing = this.state.isEditing
    if (isEditing) {
      return (
        <form onSubmit={this.editTask}>
          <input type='text' name='editingTask' id='editingTask'
            value={this.state.editingTask}
            onChange={this.handleChange} />
          <button>Save</button>
        </form>
      )
    }
    return (
      <div className='Todo'>
        <span
          onClick={this.markCompleted}
          className={this.state.isCompleted ? 'Todo-mark-completed' : ''}
        >
          {this.props.task}
        </span>
        <button onClick={this.showEditForm}>Edit</button>
        <button onClick={this.props.remove}>Remove</button>
      </div>
    )

  }
}

export default Todo

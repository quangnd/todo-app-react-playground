import React from 'react'
import './NewTodoForm.css'
import uuid from 'uuid/v4'
class NewTodoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { task: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleAddNew(e) {
    e.preventDefault()
    this.props.addNew({ ...this.state, id: uuid(), isCompleted: false })
    this.setState({ task: '' })
  }
  render() {
    return (
      <div className='NewTodoForm'>
        <form onSubmit={this.handleAddNew}>
          <label htmlFor='task'>Enter new task: </label>
          <input type='text' name='task' id='task' value={this.state.task} onChange={this.handleChange} />
          <button>Add new</button>
        </form>
      </div>
    )
  }
}

export default NewTodoForm

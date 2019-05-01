# Simple to do App

## Features

- [X] List/Add/Remove todo.
- [X] Edit todo with inline form.
- [X] Mark as completed when click on task.
- [ ] Add local storage and retrieve todo list when page loads.

## Useful functions

1. Find an element in array and update

```
const task = 'xxx', isCompleted = true
let updatedTodoList = this.state.todoList.map(todo => {
  if (todo.id === id) {
    return { ...todo, task, isCompleted }
  }
  return todo
})
``

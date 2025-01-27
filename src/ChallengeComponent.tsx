import React, { useState } from 'react'

export function ChallengeComponent() {

  const statusList = ['To Do', 'In Progress', 'Done'];
  const initialTasks = [
    { id: 1, title: 'Mow the Lawn', status: 'To Do' },
    { id: 2, title: 'Pull Weeds', status: 'In Progress' },
    { id: 3, title: 'Rake the Leaves', status: 'Done' }
  ];

  // Initialize future state varibles here

  const handleAddTask = () => {
    // Handle submitting new task to list state
  }

  const handleMoveTask = () => {
    // Handle moving available tasks by updating the status
  }

  return (
    <div className="form">

      <div className="form__columns">
        <p>Column markup will go here.</p>
      </div>

      <div className="form__submit">
        <input
          className="form__input"
          type="text"
          placeholder="Enter new task"
        />
        <button
          className="form__button button button--primary"
          onClick={handleAddTask}
        >
        Add
        </button>
      </div>

    </div>
  )
}

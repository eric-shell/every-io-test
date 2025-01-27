import React, { useState } from 'react'

export function ChallengeComponent() {

  const statusList = ['To Do', 'In Progress', 'Done'];
  const initialTasks = [
    { id: 1, title: 'Mow the Lawn', status: 'To Do' },
    { id: 2, title: 'Pull Weeds', status: 'In Progress' },
    { id: 3, title: 'Rake the Leaves', status: 'Done' }
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, { id: Date.now(), title: newTask, status: 'To Do' }]);
    setNewTask('');
  }

  const handleMoveTask = () => {
    // Handle moving available tasks by updating the status
  }

  return (
    <div className="form">

      <div className="form__columns">

        {statusList.map((status) => (
          <div key={status} className="form__column">
            <h2 className="form__heading">{status}</h2>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (

                <div key={task.id} className="task">
                  {status !== 'To Do' && (
                    <button className="task__action task--demote">←</button>
                  )}

                  <p className="task__title">{task.title}</p>

                  {status !== 'Done' && (
                    <button className="task__action task--promote">→</button>
                  )}
                </div>

              ))}
          </div>
        ))}

      </div>

      <div className="form__submit">
        <input
          className="form__input"
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
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

import { useState } from 'react'

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
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, status: 'To Do' }]);
      setNewTask('');
    }
  }

  const handleMoveTask  = (id: number, direction: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const currentIndex = statusList.indexOf(task.status);
        const nextIndex = direction === 'promote'
          ? (currentIndex + 1) % statusList.length
          : (currentIndex - 1 + statusList.length) % statusList.length;
        return { ...task, status: statusList[nextIndex] };
      }
      return task;
    }));
  };

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
                  <button
                    onClick={status !== 'To Do' ? () => handleMoveTask(task.id, 'demote') : undefined}
                    className={`task__action ${status === 'To Do' ? 'task--disabled' : 'task--demote'}`}
                    disabled={status === 'To Do'}
                  >
                    ←
                  </button>

                  <p className="task__title">{task.title}</p>

                  <button
                    onClick={status !== 'Done' ? () => handleMoveTask(task.id, 'promote') : undefined}
                    className={`task__action ${status === 'Done' ? 'task--disabled' : 'task--promote'}`}
                    disabled={status === 'Done'}
                  >
                    →
                  </button>
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

import { useState } from 'react'

const initialTasks = [
  { id: 1, title: 'Fix dashboard UI', project: 'Worksync Dashboard', priority: 'High', done: false },
  { id: 2, title: 'Build project page', project: 'Worksync Dashboard', priority: 'Medium', done: true },
  { id: 3, title: 'Connect API', project: 'API Integration', priority: 'High', done: false },
  { id: 4, title: 'Review team tasks', project: 'Internal', priority: 'Low', done: false },
  { id: 5, title: 'Setup database schema', project: 'Database Setup', priority: 'Medium', done: false }
]

const priorityColors = {
  High: 'bg-red-50 text-red-600',
  Medium: 'bg-orange-50 text-orange-600',
  Low: 'bg-green-50 text-green-600'
}

const Task = () => {
  const [tasks, setTasks] = useState(initialTasks)

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const pending = tasks.filter(t => !t.done).length
  const completed = tasks.filter(t => t.done).length

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-500 mt-2">Organize and track your daily tasks.</p>
        </div>
        <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
          + Add Task
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-sm text-gray-500">Total Tasks</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-1">{tasks.length}</h2>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-sm text-gray-500">Pending</p>
          <h2 className="text-2xl font-bold text-orange-600 mt-1">{pending}</h2>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-sm text-gray-500">Completed</p>
          <h2 className="text-2xl font-bold text-green-600 mt-1">{completed}</h2>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl mt-6 overflow-hidden">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 last:border-0">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="w-4 h-4 accent-violet-600"
            />
            <div className="flex-1">
              <p className={`text-gray-800 ${task.done ? 'line-through text-gray-400' : ''}`}>
                {task.title}
              </p>
              <p className="text-xs text-gray-400 mt-1">{task.project}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-md ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Task
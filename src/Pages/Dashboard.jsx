import { useState } from 'react'

const stats = [
  { title: 'Total Projects', value: '12', color: 'text-violet-600', bg: 'bg-violet-50' },
  { title: 'Total Tasks', value: '48', color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Pending Tasks', value: '16', color: 'text-orange-600', bg: 'bg-orange-50' },
  { title: 'Completed Tasks', value: '32', color: 'text-green-600', bg: 'bg-green-50' },
  { title: 'Team Members', value: '8', color: 'text-pink-600', bg: 'bg-pink-50' }
]

const todayTasks = [
  { id: 1, name: 'Fix dashboard UI', done: false },
  { id: 2, name: 'Build project page', done: true },
  { id: 3, name: 'Connect API', done: false },
  { id: 4, name: 'Review team tasks', done: false }
]

const deadlines = [
  { name: 'Landing Page Design', date: '22 Oct', status: 'In Progress' },
  { name: 'API Integration', date: '24 Oct', status: 'Pending' },
  { name: 'Database Setup', date: '27 Oct', status: 'Pending' },
  { name: 'Project Review', date: '30 Oct', status: 'Upcoming' }
]

const Dashboard = () => {
  const [tasks, setTasks] = useState(todayTasks)

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Ketan 👋</h1>
          <p className="text-gray-500 mt-2">Here's what's happening with your projects today.</p>
        </div>
        <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
          + New Project
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mt-6">
        {stats.map(item => (
          <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center`}>
              <span className={`text-lg font-bold ${item.color}`}>{item.value}</span>
            </div>
            <p className="text-sm text-gray-500 mt-3">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg">Today's Tasks</h2>
            <span className="text-xs text-gray-400">{tasks.filter(t => t.done).length}/{tasks.length} done</span>
          </div>
          {tasks.map(task => (
            <div key={task.id} className="flex items-center gap-3 py-4 border-b border-gray-100 last:border-0">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4 accent-violet-600"
              />
              <span className={`text-gray-700 ${task.done ? 'line-through text-gray-400' : ''}`}>
                {task.name}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="font-bold text-lg mb-3">Upcoming Deadlines</h2>
          {deadlines.map(item => (
            <div key={item.name} className="flex items-center justify-between gap-3 py-4 border-b border-gray-100 last:border-0">
              <div>
                <p className="text-gray-700">{item.name}</p>
                <p className="text-xs text-gray-400 mt-1">{item.status}</p>
              </div>
              <span className="text-violet-600 text-sm font-medium">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
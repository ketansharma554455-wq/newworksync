import { useState } from 'react'

const initialNotifications = [
  { id: 1, title: 'New task assigned', desc: 'Riya assigned you "Fix dashboard UI".', time: '2 min ago', unread: true, type: 'task' },
  { id: 2, title: 'Project deadline near', desc: 'Landing Page Design is due in 2 days.', time: '1 hour ago', unread: true, type: 'deadline' },
  { id: 3, title: 'Comment on your task', desc: 'Arjun commented on "Connect API".', time: '3 hours ago', unread: false, type: 'comment' },
  { id: 4, title: 'New team member', desc: 'Priya Nair joined the Worksync team.', time: 'Yesterday', unread: false, type: 'team' },
  { id: 5, title: 'Task completed', desc: 'Rahul marked "Build project page" as done.', time: '2 days ago', unread: false, type: 'task' }
]

const typeColors = {
  task: 'bg-blue-50 text-blue-600',
  deadline: 'bg-orange-50 text-orange-600',
  comment: 'bg-violet-50 text-violet-600',
  team: 'bg-pink-50 text-pink-600'
}

const Notification = () => {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Unread']

  const visible = filter === 'All'
    ? notifications
    : notifications.filter(n => n.unread)

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })))
  }

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-500 mt-2">Stay updated with your workspace activity.</p>
        </div>
        <button
          onClick={markAllRead}
          className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg"
        >
          Mark all as read
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-sm px-4 py-2 rounded-lg border ${
              filter === f
                ? 'bg-violet-600 text-white border-violet-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="bg-white border border-gray-200 rounded-xl mt-6 overflow-hidden">
        {visible.length === 0 && (
          <div className="p-8 text-center text-gray-400 text-sm">No notifications to show.</div>
        )}
        {visible.map(item => (
          <div
            key={item.id}
            className={`flex items-start gap-4 px-5 py-4 border-b border-gray-100 last:border-0 ${
              item.unread ? 'bg-violet-50/40' : ''
            }`}
          >
            <span className={`text-xs px-2 py-1 rounded-md capitalize ${typeColors[item.type]}`}>
              {item.type}
            </span>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              <p className="text-xs text-gray-400 mt-2">{item.time}</p>
            </div>
            {item.unread && <span className="w-2 h-2 rounded-full bg-violet-600 mt-2" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notification
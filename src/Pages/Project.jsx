import { useState } from 'react'

const initialProjects = [
  { id: 1, name: 'Worksync Dashboard', client: 'Internal', progress: 75, status: 'Active', deadline: '22 Oct' },
  { id: 2, name: 'Landing Page Design', client: 'Acme Corp', progress: 40, status: 'Active', deadline: '24 Oct' },
  { id: 3, name: 'API Integration', client: 'TechNova', progress: 90, status: 'Review', deadline: '27 Oct' },
  { id: 4, name: 'Database Setup', client: 'Internal', progress: 20, status: 'Pending', deadline: '30 Oct' }
]

const statusColors = {
  Active: 'bg-green-50 text-green-600',
  Pending: 'bg-orange-50 text-orange-600',
  Review: 'bg-blue-50 text-blue-600',
  Completed: 'bg-violet-50 text-violet-600'
}

const Project = () => {
  const [projects] = useState(initialProjects)
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Active', 'Pending', 'Review']

  const visible = filter === 'All' ? projects : projects.filter(p => p.status === filter)

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-500 mt-2">Manage your projects and track progress.</p>
        </div>
        <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
          + Add Project
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {visible.map(project => (
          <div key={project.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-900">{project.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{project.client}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-md ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>
            <div className="mt-5">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-violet-600 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-400">Due {project.deadline}</span>
              <button className="text-sm text-violet-600 font-medium hover:underline">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
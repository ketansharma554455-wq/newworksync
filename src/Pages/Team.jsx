import { useState } from 'react'

const initialMembers = [
  { id: 1, name: 'Ketan Sharma', role: 'Frontend Developer', email: 'ketan@worksync.com', status: 'Online', tasks: 12 },
  { id: 2, name: 'Riya Patel', role: 'UI Designer', email: 'riya@worksync.com', status: 'Online', tasks: 8 },
  { id: 3, name: 'Arjun Mehta', role: 'Backend Developer', email: 'arjun@worksync.com', status: 'Away', tasks: 10 },
  { id: 4, name: 'Sneha Verma', role: 'Project Manager', email: 'sneha@worksync.com', status: 'Offline', tasks: 6 },
  { id: 5, name: 'Rahul Singh', role: 'QA Tester', email: 'rahul@worksync.com', status: 'Online', tasks: 9 },
  { id: 6, name: 'Priya Nair', role: 'Frontend Developer', email: 'priya@worksync.com', status: 'Away', tasks: 7 }
]

const statusColors = {
  Online: 'bg-green-50 text-green-600',
  Away: 'bg-orange-50 text-orange-600',
  Offline: 'bg-gray-100 text-gray-500'
}

const Team = () => {
  const [members] = useState(initialMembers)
  const [search, setSearch] = useState('')

  const visible = members.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team</h1>
          <p className="text-gray-500 mt-2">Manage your team members.</p>
        </div>
        <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
          + Invite Member
        </button>
      </div>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search by name or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-400"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {visible.map(member => (
          <div key={member.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                <span className="text-violet-600 font-bold text-lg">
                  {member.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{member.role}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-md ${statusColors[member.status]}`}>
                {member.status}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400">{member.email}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-gray-500">{member.tasks} active tasks</span>
                <button className="text-sm text-violet-600 font-medium hover:underline">View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
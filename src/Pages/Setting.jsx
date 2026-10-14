import { useState } from 'react'

const Setting = () => {
  const [activeTab, setActiveTab] = useState('Profile')
  const tabs = ['Profile', 'Notifications', 'Security', 'Appearance']

  const [profile, setProfile] = useState({
    name: 'Ketan Sharma',
    email: 'ketan@worksync.com',
    role: 'Frontend Developer',
    bio: 'Building clean and fast UIs for Worksync.'
  })

  const [notif, setNotif] = useState({
    taskAssigned: true,
    deadlineReminder: true,
    comments: false,
    weeklyReport: true
  })

  const toggleNotif = (key) => {
    setNotif({ ...notif, [key]: !notif[key] })
  }

  const notifLabels = {
    taskAssigned: 'New task assigned to me',
    deadlineReminder: 'Deadline reminders',
    comments: 'Comments and mentions',
    weeklyReport: 'Weekly progress report'
  }

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-2">Manage your account and preferences.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-6">
        <div className="bg-white border border-gray-200 rounded-xl p-3 lg:col-span-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left text-sm px-4 py-3 rounded-lg mb-1 last:mb-0 ${
                activeTab === tab
                  ? 'bg-violet-50 text-violet-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 lg:col-span-3">
          {activeTab === 'Profile' && (
            <div>
              <h2 className="font-bold text-lg mb-5">Profile Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500">Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-400"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-400"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">Role</label>
                  <input
                    type="text"
                    value={profile.role}
                    onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-400"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-gray-500">Bio</label>
                  <textarea
                    rows="3"
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-400 resize-none"
                  />
                </div>
              </div>
              <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-5 py-2 rounded-lg mt-6">
                Save Changes
              </button>
            </div>
          )}
          {activeTab === 'Notifications' && (
            <div>
              <h2 className="font-bold text-lg mb-5">Notification Preferences</h2>
              {Object.keys(notif).map(key => (
                <div key={key} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-700">{notifLabels[key]}</span>
                  <button
                    onClick={() => toggleNotif(key)}
                    className={`w-11 h-6 rounded-full transition-colors ${
                      notif[key] ? 'bg-violet-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                        notif[key] ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Security' && (
            <div>
              <h2 className="font-bold text-lg mb-5">Security Settings</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm text-gray-500">Current Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-400"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">New Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-400"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-400"
                  />
                </div>
              </div>
              <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-5 py-2 rounded-lg mt-6">
                Update Password
              </button>
            </div>
          )}
          {activeTab === 'Appearance' && (
            <div>
              <h2 className="font-bold text-lg mb-5">Appearance</h2>
              <div className="flex gap-4">
                <button className="flex-1 border-2 border-violet-600 rounded-xl p-4 text-left">
                  <div className="w-full h-20 bg-gray-50 rounded-lg border border-gray-200" />
                  <p className="text-sm font-medium mt-3">Light Mode</p>
                </button>
                <button className="flex-1 border-2 border-gray-200 rounded-xl p-4 text-left">
                  <div className="w-full h-20 bg-gray-800 rounded-lg" />
                  <p className="text-sm font-medium mt-3">Dark Mode</p>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Setting
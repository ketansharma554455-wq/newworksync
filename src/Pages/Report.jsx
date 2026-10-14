import { useState } from 'react'

const Report = () => {
  const [range, setRange] = useState('Week')
  const bars = [40, 65, 30, 80, 55, 20, 45]
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div
        className="rounded-2xl p-6"
        style={{ backgroundColor: '#0f172a', color: '#ffffff' }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm" style={{ color: '#cbd5e1' }}>Performance Overview</p>
            <h1 className="text-3xl font-bold mt-1" style={{ color: '#ffffff' }}>Reports</h1>
          </div>
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="text-sm px-3 py-2 rounded-lg outline-none"
            style={{ backgroundColor: '#1e293b', color: '#ffffff', border: '1px solid #334155' }}
          >
            <option>Week</option>
            <option>Month</option>
            <option>Year</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div>
            <p className="text-xs" style={{ color: '#cbd5e1' }}>Completed</p>
            <p className="text-2xl font-bold mt-1" style={{ color: '#ffffff' }}>32</p>
          </div>
          <div>
            <p className="text-xs" style={{ color: '#cbd5e1' }}>Pending</p>
            <p className="text-2xl font-bold mt-1" style={{ color: '#ffffff' }}>16</p>
          </div>
          <div>
            <p className="text-xs" style={{ color: '#cbd5e1' }}>Projects</p>
            <p className="text-2xl font-bold mt-1" style={{ color: '#ffffff' }}>7</p>
          </div>
          <div>
            <p className="text-xs" style={{ color: '#cbd5e1' }}>Hours</p>
            <p className="text-2xl font-bold mt-1" style={{ color: '#ffffff' }}>184</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-200">
          <h2 className="font-bold text-lg" style={{ color: '#0f172a' }}>Activity</h2>
          <div className="mt-6">
            <div className="flex items-end justify-between gap-3 h-52">
              {bars.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div
                    className="w-full rounded-lg"
                    style={{
                      height: `${val}%`,
                      background: 'linear-gradient(to top, #6d28d9, #a78bfa)'
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-3 mt-3">
              {days.map(d => (
                <span key={d} className="flex-1 text-center text-xs" style={{ color: '#94a3b8' }}>
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h2 className="font-bold text-lg" style={{ color: '#0f172a' }}>Top Projects</h2>
          <div className="mt-5 space-y-5">
            {[
              { name: 'Worksync Dashboard', pct: 75 },
              { name: 'API Integration', pct: 90 },
              { name: 'Landing Page', pct: 40 },
              { name: 'Database Setup', pct: 20 }
            ].map(p => (
              <div key={p.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span style={{ color: '#475569' }}>{p.name}</span>
                  <span className="font-semibold" style={{ color: '#0f172a' }}>{p.pct}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#f1f5f9' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${p.pct}%`, backgroundColor: '#7c3aed' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
import { useState } from 'react'

const Message = () => {
  const [active, setActive] = useState(1)
  const [input, setInput] = useState('')
  const [chats, setChats] = useState({
    1: [
      { me: false, text: 'Dashboard ka design ready hai?' },
      { me: true, text: 'Haan bas final touch de raha hoon.' },
      { me: false, text: 'Cool, kal review karenge.' }
    ],
    2: [
      { me: false, text: 'API endpoints bhej diye.' },
      { me: true, text: 'Thanks, aaj integrate kar dunga.' }
    ],
    3: [
      { me: false, text: 'Weekly report ready karni hai.' },
      { me: true, text: 'Shaam tak de dunga.' }
    ]
  })
  const people = [
    { id: 1, name: 'Riya Patel', role: 'Designer', online: true },
    { id: 2, name: 'Arjun Mehta', role: 'Backend', online: true },
    { id: 3, name: 'Sneha Verma', role: 'Manager', online: false }
  ]
  const current = people.find(p => p.id === active)

  const send = () => {
    if (!input.trim()) return
    setChats({ ...chats, [active]: [...chats[active], { me: true, text: input }] })
    setInput('')
  }

  return (
    <div className="min-h-full bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden flex h-[600px]">
        <div className="w-64 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">Chats</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {people.map(p => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left ${
                  active === p.id ? 'bg-violet-50 border-r-2 border-violet-600' : 'hover:bg-gray-50'
                }`}
              >
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white text-sm font-bold">
                    {p.name[0]}
                  </div>
                  {p.online && (
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{p.name}</p>
                  <p className="text-xs text-gray-400 truncate">{p.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white text-sm font-bold">
              {current.name[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{current.name}</p>
              <p className="text-xs text-green-500">{current.online ? 'Online' : 'Offline'}</p>
            </div>
          </div>
          <div className="flex-1 p-5 space-y-3 overflow-y-auto bg-gray-50">
            {chats[active].map((m, i) => (
              <div key={i} className={`flex ${m.me ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                    m.me
                      ? 'bg-violet-600 text-white rounded-br-md'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="px-5 py-4 border-t border-gray-100 flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Type a message"
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none"
            />
            <button
              onClick={send}
              className="bg-violet-600 hover:bg-violet-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
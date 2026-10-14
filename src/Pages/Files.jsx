import { useState } from 'react'

const initialFiles = [
  { id: 1, name: 'dashboard-design.fig', type: 'Design', size: '4.2 MB', owner: 'Riya Patel', date: '20 Oct' },
  { id: 2, name: 'api-docs.pdf', type: 'Document', size: '1.1 MB', owner: 'Arjun Mehta', date: '21 Oct' },
  { id: 3, name: 'worksync-logo.png', type: 'Image', size: '320 KB', owner: 'Ketan Sharma', date: '18 Oct' },
  { id: 4, name: 'requirements.docx', type: 'Document', size: '780 KB', owner: 'Sneha Verma', date: '19 Oct' },
  { id: 5, name: 'db-schema.sql', type: 'Code', size: '45 KB', owner: 'Arjun Mehta', date: '22 Oct' },
  { id: 6, name: 'demo-video.mp4', type: 'Video', size: '28 MB', owner: 'Rahul Singh', date: '23 Oct' }
]

const typeColors = {
  Design: 'bg-pink-50 text-pink-600',
  Document: 'bg-blue-50 text-blue-600',
  Image: 'bg-green-50 text-green-600',
  Code: 'bg-violet-50 text-violet-600',
  Video: 'bg-orange-50 text-orange-600'
}

const Files = () => {
  const [files] = useState(initialFiles)
  const [search, setSearch] = useState('')

  const visible = files.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Files</h1>
          <p className="text-gray-500 mt-2">All your project files in one place.</p>
        </div>
        <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
          + Upload File
        </button>
      </div>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search files..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-400"
        />
      </div>
      <div className="bg-white border border-gray-200 rounded-xl mt-6 overflow-hidden">
        <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-3 bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-500">
          <span className="col-span-5">Name</span>
          <span className="col-span-2">Type</span>
          <span className="col-span-2">Owner</span>
          <span className="col-span-2">Date</span>
          <span className="col-span-1">Size</span>
        </div>
        {visible.map(file => (
          <div
            key={file.id}
            className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-5 py-4 border-b border-gray-100 last:border-0 sm:items-center"
          >
            <div className="sm:col-span-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-500">
                  {file.name.split('.').pop().toUpperCase()}
                </span>
              </div>
              <span className="text-gray-800 text-sm">{file.name}</span>
            </div>
            <div className="sm:col-span-2">
              <span className={`text-xs px-2 py-1 rounded-md ${typeColors[file.type]}`}>
                {file.type}
              </span>
            </div>
            <span className="sm:col-span-2 text-sm text-gray-500">{file.owner}</span>
            <span className="sm:col-span-2 text-sm text-gray-500">{file.date}</span>
            <span className="sm:col-span-1 text-sm text-gray-400">{file.size}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Files
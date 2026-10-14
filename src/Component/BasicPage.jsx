
const BasicPage = ({ title, description }) => {
  return (
    <div className="p-6 bg-gradient-400 min-h-full">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-50 mt-2">{description}</p>
        </div>
        <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">
          + Add {title}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {['Total', 'In Progress', 'Completed'].map((label, index) => (
          <div key={label} className="bg-white p-5 rounded-xl border border-gray-200">
            <p className="text-gray-500">{label}</p>
            <h2 className="text-2xl font-bold mt-3">{[12, 5, 7][index]}</h2>
          </div>
        ))}
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-6">
        <h2 className="font-bold text-lg">{title} Overview</h2>
        <p className="text-gray-500 mt-2">Your {title.toLowerCase()} information will appear here.</p>
      </div>
    </div>
  )
}

export default BasicPage

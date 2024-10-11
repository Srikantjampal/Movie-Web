
const layout = ({children}) => {
  return (
    <div className="bg-gray-800 p-4 h-screen text-white flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

export default layout
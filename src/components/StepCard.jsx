export default function StepCard({ title, desc, isActive, onClick, gradient }) {
  return (
    <div
      onClick={onClick}
      className={`relative p-6 rounded-2xl shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1
        ${isActive 
          ? `bg-gradient-to-br ${gradient} text-white ring-4 ring-purple-300 ring-opacity-50` 
          : 'bg-white text-gray-800 hover:shadow-2xl'
        }`}
    >
      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-white bg-opacity-20">
        <span className="text-2xl font-bold">{title[0]}</span>
      </div>
      <h3 className="font-bold text-lg text-center">{title}</h3>
      <p className={`text-sm text-center mt-2 ${isActive ? 'text-white' : 'text-gray-600'}`}>
        {desc}
      </p>
      {isActive && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 
          border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-purple-600">
        </div>
      )}
    </div>
  );
}
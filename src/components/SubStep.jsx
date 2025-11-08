export default function SubStep({ title, isActive }) {
  return (
    <div
      className={`p-4 rounded-xl text-center transition-all duration-300 border-2
        ${isActive 
          ? 'bg-gradient-to-br from-purple-500 to-indigo-500 text-white border-purple-600 shadow-lg scale-105' 
          : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300'
        }`}
    >
      <p className="text-xs font-medium">{title}</p>
    </div>
  );
}
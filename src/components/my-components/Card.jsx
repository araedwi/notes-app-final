export default function Card({ title, content }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-700">{content}</p>
      </div>
    );
  }
  
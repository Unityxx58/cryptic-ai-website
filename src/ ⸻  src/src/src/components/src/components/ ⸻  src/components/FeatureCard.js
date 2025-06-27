export default function FeatureCard({ title, description }) {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition cursor-default">
      <h3 className="text-3xl font-semibold mb-4 text-green-600">{title}</h3>
      <p className="text-gray-700 text-lg">{description}</p>
    </div>
  );
}

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["1000 AI requests/month", "Basic Support"],
      featured: false,
    },
    {
      name: "Pro",
      price: "$49/mo",
      features: ["50,000 AI requests/month", "Priority Support", "API Access"],
      featured: true,
    },
    {
      name: "Business",
      price: "$199/mo",
      features: ["500,000 AI requests/month", "Dedicated Manager", "Custom Integrations"],
      featured: false,
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-16 text-center">Pricing Plans</h2>
      <div className="flex flex-col md:flex-row justify-center gap-12">
        {plans.map(({ name, price, features, featured }) => (
          <div
            key={name}
            className={`flex-1 border rounded-xl p-10 shadow-md transition transform hover:scale-105 ${
              featured ? "border-green-500 bg-white" : "border-gray-300 bg-white"
            }`}
          >
            <h3 className="text-3xl font-bold mb-6 text-green-600">{name}</h3>
            <p className="text-4xl font-extrabold mb-8">{price}</p>
            <ul className="mb-10 list-disc list-inside space-y-2 text-gray-700">
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button
              className={`w-full py-4 rounded-lg font-semibold ${
                featured
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              } transition`}
            >
              {featured ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

import FeatureCard from "../components/FeatureCard";

const features = [
  {
    title: "Powerful AI APIs",
    description: "Generate content, write code, create ads, and automate workflows easily.",
  },
  {
    title: "Scalable Infrastructure",
    description: "Built to handle millions of requests with secure cloud architecture.",
  },
  {
    title: "Easy Integration",
    description: "Plug into our APIs quickly and start building immediately.",
  },
  {
    title: "Enterprise Ready",
    description: "Custom pricing, SLAs, and dedicated support for business needs.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-14 text-center">Features</h2>
      <div className="grid md:grid-cols-2 gap-14">
        {features.map(({ title, description }) => (
          <FeatureCard key={title} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}

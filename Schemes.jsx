import { Link } from "react-router-dom";

export default function Schemes() {
  const schemes = [
    {
      title: "Jal Jeevan Mission (JJM) / जल जीवन मिशन",
      description:
        "A flagship program aimed at providing Functional Household Tap Connections (FHTCs) to every rural household by 2024.",
      features: [
        "Safe and adequate drinking water to all rural households.",
        "Community participation through Village Water & Sanitation Committees.",
        "Special focus on quality-affected habitations.",
        "Capacity building of frontline workers and ASHA workers.",
      ],
      color: "blue",
    },
    {
      title: "National Water Quality Sub-Mission / राष्ट्रीय जल गुणवत्ता उप-मिशन",
      description:
        "Focused on providing safe drinking water to arsenic- and fluoride-affected rural areas, ensuring public health protection.",
      features: [
        "Setting up water quality testing laboratories.",
        "Deployment of Field Test Kits (FTKs).",
        "Real-time monitoring of contaminated regions.",
        "Awareness and training programs for local communities.",
      ],
      color: "green",
    },
    {
      title: "Har Ghar Nal Se Jal / हर घर नल से जल",
      description:
        "Ensures every household has access to safe water supply through piped connections.",
      features: [
        "Coverage of both rural and urban households.",
        "Equitable distribution of water sources.",
        "Integration with water conservation activities.",
        "Sustainability ensured via community ownership.",
      ],
      color: "yellow",
    },
    {
      title: "Water Conservation & Management Schemes / जल संरक्षण एवं प्रबंधन योजनाएँ",
      description:
        "Schemes to revive traditional water bodies, promote rainwater harvesting, and manage water resources efficiently.",
      features: [
        "Rainwater harvesting structures in schools, offices, and homes.",
        "Watershed development and groundwater recharge projects.",
        "Awareness campaigns on water use efficiency.",
        "Adoption of modern irrigation techniques.",
      ],
      color: "purple",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-green-50 to-blue-50 py-12 shadow-inner mb-8">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">
            Government Water Schemes
          </h1>
          <p className="text-lg text-gray-600 mt-2 italic">
            “हर घर जल, हर घर सुरक्षा”
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            The Ministry of Jal Shakti, Government of India, has launched several landmark initiatives 
            to ensure sustainable and safe drinking water for every citizen.
          </p>
        </div>
      </section>

      {/* Scheme Panels */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mb-12">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className={`bg-${scheme.color}-50 border-l-4 border-${scheme.color}-600 rounded-lg shadow-lg p-6 hover:shadow-xl transition`}
          >
            <h3 className={`text-2xl font-semibold text-${scheme.color}-700 mb-3`}>
              {scheme.title}
            </h3>
            <p className="text-gray-700 mb-4">{scheme.description}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {scheme.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Quick Links / CTA Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 px-6">
        <Link to="/" className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-700 text-center hover:shadow-lg transition">
          <h4 className="text-blue-700 font-bold mb-2">💧 Water Reports</h4>
          <p className="text-gray-600 text-sm">View real-time & historical water quality data.</p>
        </Link>
        <Link to="/about" className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-700 text-center hover:shadow-lg transition">
          <h4 className="text-green-700 font-bold mb-2">ℹ️ About Us</h4>
          <p className="text-gray-600 text-sm">Learn more about National Jal Suraksha Portal.</p>
        </Link>
        <Link to="/asha-login" className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-600 text-center hover:shadow-lg transition">
          <h4 className="text-orange-600 font-bold mb-2">👩‍⚕️ ASHA Login</h4>
          <p className="text-gray-600 text-sm">Submit water sample data and updates.</p>
        </Link>
        <Link to="/grievance" className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600 text-center hover:shadow-lg transition">
          <h4 className="text-red-600 font-bold mb-2">📩 Grievances</h4>
          <p className="text-gray-600 text-sm">Submit and track complaints regarding water services.</p>
        </Link>
      </section>

      {/* Closing Motto */}
      <p className="text-center text-gray-600 italic mb-12">
        जल ही जीवन है • Water is Life
      </p>
    </div>
  );
}

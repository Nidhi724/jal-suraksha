import { Droplet, ShieldCheck, Users, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-12 shadow-inner mb-8">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">
            About National Jal Suraksha Portal
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 italic">
            “हर घर जल, हर घर सुरक्षा”
          </h2>
          <div className="mx-auto w-32 border-b-4 border-blue-600 mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The <span className="font-semibold">National Jal Suraksha Portal</span> is a
            flagship initiative of the <span className="font-semibold">Ministry of Jal Shakti, Government of India</span>, 
            providing real-time monitoring, transparent reporting, and community empowerment to ensure safe and sustainable drinking water across the nation.
          </p>
        </div>
      </section>

      {/* Vision & Mission Panels */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 px-6">
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h3>
          <p className="text-gray-700 text-justify">
            To safeguard public health by ensuring universal access to clean and safe drinking water through digital innovation, transparency, and active community participation.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">Our Mission</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <Droplet className="h-6 w-6 text-green-600 mt-1 mr-2" />
              Monitor and improve drinking water quality nationwide.
            </li>
            <li className="flex items-start">
              <ShieldCheck className="h-6 w-6 text-green-600 mt-1 mr-2" />
              Provide transparent, real-time data on water sources.
            </li>
            <li className="flex items-start">
              <Users className="h-6 w-6 text-green-600 mt-1 mr-2" />
              Strengthen participation through ASHA workers & local communities.
            </li>
            <li className="flex items-start">
              <Cpu className="h-6 w-6 text-green-600 mt-1 mr-2" />
              Use AI/ML for predictive analysis of water-borne risks.
            </li>
          </ul>
        </div>
      </div>

      {/* Commitment Panel */}
      <div className="max-w-6xl mx-auto bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-6 shadow-lg mb-10 hover:shadow-xl transition px-6">
        <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Our Commitment</h3>
        <p className="text-gray-700 text-justify leading-relaxed">
          Through this portal, the Government of India reaffirms its dedication to 
          <span className="font-semibold"> “Har Ghar Jal, Har Ghar Suraksha”</span>. 
          Every household shall have access to safe drinking water, protection against water-borne diseases, 
          and a healthier nation for all.
        </p>
      </div>

      {/* Quick Links / CTA Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 px-6">
        <Link to="/" className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-700 text-center hover:shadow-lg transition">
          <h4 className="text-blue-700 font-bold mb-2">💧 Water Reports</h4>
          <p className="text-gray-600 text-sm">View real-time & historical water quality data.</p>
        </Link>
        <Link to="/schemes" className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-700 text-center hover:shadow-lg transition">
          <h4 className="text-green-700 font-bold mb-2">📑 Govt Schemes</h4>
          <p className="text-gray-600 text-sm">Explore national and state water schemes.</p>
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

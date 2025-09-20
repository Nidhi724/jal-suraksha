import { FileText, BookOpen, BarChart3, Globe } from "lucide-react";

export default function InfoResources() {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">
        Information & Resources / जानकारी और संसाधन
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8 text-center">
        Access important documents, reports, guidelines, and statistics related to{" "}
        <strong>Water Safety, Quality, and Management</strong>.  
        <br />
        जल सुरक्षा, गुणवत्ता और प्रबंधन से संबंधित महत्वपूर्ण दस्तावेज़, रिपोर्ट और दिशा-निर्देश प्राप्त करें।
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Water Quality Reports */}
        <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="text-blue-600 w-6 h-6" />
            <h3 className="text-xl font-semibold text-blue-700">
              Water Quality Reports / जल गुणवत्ता रिपोर्ट
            </h3>
          </div>
          <p className="text-gray-600 mb-2">
            Detailed district-wise and state-wise water testing results.
          </p>
          <p className="text-gray-600 text-sm italic">
            राज्यवार और जिला-वार जल परीक्षण की विस्तृत रिपोर्ट।
          </p>
          <a
            href="#"
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            Download Reports →
          </a>
        </div>

        {/* Guidelines & Manuals */}
        <div className="p-6 bg-green-50 rounded-lg shadow hover:shadow-md transition">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="text-green-600 w-6 h-6" />
            <h3 className="text-xl font-semibold text-green-700">
              Guidelines & Manuals / दिशा-निर्देश एवं पुस्तिकाएँ
            </h3>
          </div>
          <p className="text-gray-600 mb-2">
            Official government documents for water safety, sanitation, and conservation.
          </p>
          <p className="text-gray-600 text-sm italic">
            जल सुरक्षा, स्वच्छता एवं संरक्षण हेतु सरकारी पुस्तिकाएँ।
          </p>
          <a
            href="#"
            className="text-green-600 text-sm font-semibold hover:underline"
          >
            View Guidelines →
          </a>
        </div>

        {/* Educational Materials */}
        <div className="p-6 bg-yellow-50 rounded-lg shadow hover:shadow-md transition">
          <div className="flex items-center space-x-3 mb-4">
            <Globe className="text-yellow-600 w-6 h-6" />
            <h3 className="text-xl font-semibold text-yellow-700">
              Educational Materials / शैक्षणिक सामग्री
            </h3>
          </div>
          <p className="text-gray-600 mb-2">
            Posters, leaflets, and awareness campaigns for schools and communities.
          </p>
          <p className="text-gray-600 text-sm italic">
            स्कूलों और समुदायों हेतु पोस्टर, पर्चे और जागरूकता सामग्री।
          </p>
          <a
            href="#"
            className="text-yellow-600 text-sm font-semibold hover:underline"
          >
            Explore Resources →
          </a>
        </div>

        {/* Data & Statistics */}
        <div className="p-6 bg-purple-50 rounded-lg shadow hover:shadow-md transition">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart3 className="text-purple-600 w-6 h-6" />
            <h3 className="text-xl font-semibold text-purple-700">
              Data & Statistics / आँकड़े एवं सांख्यिकी
            </h3>
          </div>
          <p className="text-gray-600 mb-2">
            Datasets on water usage, supply coverage, and progress of schemes.
          </p>
          <p className="text-gray-600 text-sm italic">
            जल उपयोग, आपूर्ति कवरेज और योजनाओं की प्रगति से संबंधित आँकड़े।
          </p>
          <a
            href="#"
            className="text-purple-600 text-sm font-semibold hover:underline"
          >
            View Data →
          </a>
        </div>
      </div>
    </div>
  );
}

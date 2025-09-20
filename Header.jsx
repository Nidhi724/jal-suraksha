export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-3 space-x-4">
        {/* Emblem / Logo */}
        <img
          src="/assets/images.png"   // ✅ directly from public folder
          alt="National Emblem"
          className="h-12 w-auto"
        />

        {/* Title Text */}
        <div>
          <h1 className="text-red-700 font-bold text-xl leading-tight">
            राष्ट्रीय जल सुरक्षा पोर्टल
          </h1>
          <p className="text-sm text-gray-800">
            National Jal Suraksha Portal <br />
            Ministry of Jal Shakti, Government of India
          </p>
        </div>
      </div>
    </header>
  );
}

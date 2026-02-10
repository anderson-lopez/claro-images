function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Logo / SVG */}
      <div className="mb-8">
        <img src="/assets/youtube-premium.svg" alt="YouTube" className="h-10" />
      </div>

      {/* Card del Banner */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="/assets/backggroundbanner.png"
          alt="Banner Claro"
          className="w-full h-auto object-cover"
        />

        <div className="p-6">
          <h1 className="font-semibold text-2xl text-red-600">
            Plan Claro Gamer
          </h1>
          <p className="font-medium text-gray-700 mt-2">
            Disfruta de 3 meses gratis de YouTube Premium con tu plan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

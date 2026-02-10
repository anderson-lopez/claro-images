function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="mb-8">
        <p className="text-xs text-gray-400 mb-2">Icono SVG (Vectorial)</p>
        <svg width="100" height="100" viewBox="0 0 100 100"></svg>
      </div>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <p className="p-2 text-center text-xs text-gray-400"></p>
        <img
          src="/imagen-fondo.png"
          alt="Vista Claro"
          className="w-full h-auto object-cover"
        />

        <div className="p-6">
          <h1 className="font-semibold text-xl">Plan Claro Gamer</h1>{" "}
          <p className="font-medium text-gray-600">
            Disfruta de 3 meses gratis.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;

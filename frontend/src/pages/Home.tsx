import logo from '../assets/NanoEdge_logotyp1.png';

function Home() {
  return (
    <main className="flex-grow container mx-auto p-8 text-center text-gray-100">
      <div className="xl:container md:p-3 pt-0 pb-16 m-auto mb-24">
        <h1 className="text-6xl font-bold mb-4 text-center tracking-tight mt-15">
          NANOEDGE
        </h1>
        <p className="text-lg">Sensorn för Framtiden!</p>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Våra Produkter</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a href="#"><img src={logo} alt="Product 1" className="object-cover p-1.5 transition-transform duration-300 ease-in-out transform hover:scale-105" /></a>
            <div className="p-4">
              <a href="#"><h3 className="text-xl text-black font-semibold">Produkt 1</h3></a>
              <p className="text-gray-500">Beskrivning av produkt 1.</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a href="#"><img src={logo} alt="Product 2" className="object-cover p-1.5 transition-transform duration-300 ease-in-out transform hover:scale-105" /></a>
            <div className="p-4">
              <a href="#"><h3 className="text-xl text-black font-semibold">Produkt 2</h3></a>
              <p className="text-gray-500">Beskrivning av produkt 2.</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a href="#"><img src={logo} alt="Product 3" className="object-cover p-1.5 transition-transform duration-300 ease-in-out transform hover:scale-105" /></a>
            <div className="p-4">
              <a href="#"><h3 className="text-xl text-black font-semibold">Produkt 3</h3></a>
              <p className="text-gray-500">Beskrivning av produkt 3.</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a href="#"><img src={logo} alt="Product 4" className="object-cover p-1.5 transition-transform duration-300 ease-in-out transform hover:scale-105"/></a>
            <div className="p-4">
              <a href="#"><h3 className="text-xl text-black font-semibold">Produkt 4</h3></a>
              <p className="text-gray-500">Beskrivning av produkt 4.</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default Home;

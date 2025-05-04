import { useState } from 'react';
import productimage from '../assets/nanoedge_humid_temp.png';
import productimage2 from '../assets/NanoEdge_logotyp2.png';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

function Product() {
    const images = [productimage, productimage2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => setCurrentImageIndex((currentImageIndex + 1) % images.length);
    const prevImage = () => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);

    return (
        <main className="flex-grow container mx-auto p-8 text-gray-100">
            <div className="flex flex-row gap-x-8">
                {/* Image & Spec Section */}
                <div className="w-1/2 flex-col">
                    <div className="relative group">
                        <img
                            src={images[currentImageIndex]}
                            alt="Produktbild"
                            className="max-w-full h-auto rounded-t-lg"
                        />

                        {/* Left Chevron Icon */}
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white rounded-full p-2 hidden group-hover:block"
                        >
                            <ChevronLeftIcon className="h-6 w-6" />
                        </button>

                        {/* Right Chevron Icon */}
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white rounded-full p-2 hidden group-hover:block"
                        >
                            <ChevronRightIcon className="h-6 w-6" />
                        </button>


                    </div>

                    {/* Specification Table */}
                    <div className="mt-6 bg-slate-900 p-6 rounded-b-lg text-left leading-relaxed">
                        <h1 className="text-2xl font-bold mb-4">Teknisk Specifikation av Nanoedge Airsense:</h1>
                        <table className="w-full text-gray-200 border border-gray-600 border-collapse">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2 text-lg font-semibold text-center">Specifikation</th>
                                    <th className="border px-4 py-2 text-lg font-semibold text-center">Värde</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr><td className="border px-4 py-2">Operativsystem</td><td className="border px-4 py-2 text-center">Micropython</td></tr>
                                <tr><td className="border px-4 py-2">Anslutning</td><td className="border px-4 py-2 text-center">USB-C</td></tr>
                                <tr><td className="border px-4 py-2">Temperatursensor</td><td className="border px-4 py-2 text-center">DHT22</td></tr>
                                <tr><td className="border px-4 py-2">Luftkvalitetssensor</td><td className="border px-4 py-2 text-center">MQ-135</td></tr>
                                <tr><td className="border px-4 py-2">Drivspänning</td><td className="border px-4 py-2 text-center">5V</td></tr>
                                <tr><td className="border px-4 py-2">Processor</td><td className="border px-4 py-2 text-center">ESP32-C6 32-bit RISC-V</td></tr>
                                <tr><td className="border px-4 py-2">WiFi-version</td><td className="border px-4 py-2 text-center">WiFi 6</td></tr>
                                <tr><td className="border px-4 py-2">Bluetooth-version</td><td className="border px-4 py-2 text-center">Bluetooth 5 (LE)</td></tr>
                                <tr><td className="border px-4 py-2">Processorhastighet</td><td className="border px-4 py-2 text-center">160MHz</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Description Section */}
                <div className="w-1/2 bg-slate-900 p-6 rounded-lg text-left leading-relaxed">
                    <h1 className="text-2xl font-bold mb-4">Nanoedge Airsense</h1>
                    <p className="mb-4 text-gray-200">
                        Nanoedge AirSense är inte bara en enhet för temperatur, luftfuktighet och luftkvalitet – det är din framtidssäkra plattform för fullständig inomhusövervakning.
                    </p>
                    <p className="mb-4 text-gray-200">
                        Tack vare den kraftfulla teknologin och en öppen, flexibel design kan du enkelt integrera ytterligare sensorer efter behov.
                    </p>
                    <p className="mb-2 font-semibold">Lägg till t.ex:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-200">
                        <li>Sensorer för att mäta koldioxidnivåer</li>
                        <li>Sensorer för att övervaka farliga gaser</li>
                        <li>Sensorer för partiklar (PM2.5) – för att följa luftburet damm och föroreningar</li>
                    </ul>
                    <p className="mb-4 text-gray-200">
                        Kopplingen till Homeassistant gör att varje ny sensor automatiskt blir en del av ditt smarta system, utan komplicerade inställningar. Därifrån kan du enkelt bygga automationsflöden – allt via Homeassistants intuitiva gränssnitt.
                    </p>
                    <p className="mb-2 font-semibold">Exempel:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-200">
                        <li>Skapa larm om luftkvaliteten sjunker under en viss nivå</li>
                        <li>Styr ventilation eller luftrenare automatiskt baserat på CO₂-halt eller fuktnivå</li>
                        <li>Skicka notifieringar direkt till mobilen om temperaturen överstiger kritiska värden</li>
                    </ul>
                    <p className="text-gray-200">
                        Med Nanoedge AirSense får du en lösning som inte bara fungerar idag, utan som växer med dina behov i morgon.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Product;

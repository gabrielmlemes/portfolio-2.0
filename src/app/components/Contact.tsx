import { ContactClient } from "./ContactClient";
import { Position } from "./ui/globe";

export function Contact() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs: Position[] = [
    // Americas to Europe
    {
      order: 1,
      startLat: 34.0522, // Los Angeles
      startLng: -118.2437,
      endLat: 51.5072, // London
      endLng: -0.1276,
      arcAlt: 0.5,
      color: colors[0],
    },
    // Americas to Asia
    {
      order: 2,
      startLat: -23.5505, // São Paulo
      startLng: -46.6333,
      endLat: 35.6895, // Tokyo
      endLng: 139.6917,
      arcAlt: 0.7,
      color: colors[1],
    },
    // Europe to Africa
    {
      order: 3,
      startLat: 48.8566, // Paris
      startLng: 2.3522,
      endLat: -33.9249, // Cape Town
      endLng: 18.4241,
      arcAlt: 0.4,
      color: colors[2],
    },
    // Asia to Australia
    {
      order: 4,
      startLat: 28.6139, // New Delhi
      startLng: 77.209,
      endLat: -33.8688, // Sydney
      endLng: 151.2093,
      arcAlt: 0.6,
      color: colors[0],
    },
    // Americas to Africa
    {
      order: 5,
      startLat: 40.7128, // New York
      startLng: -74.006,
      endLat: 6.5244, // Lagos
      endLng: 3.3792,
      arcAlt: 0.5,
      color: colors[1],
    },
    // Europe to Asia
    {
      order: 6,
      startLat: 55.7558, // Moscow
      startLng: 37.6173,
      endLat: 39.9042, // Beijing
      endLng: 116.4074,
      arcAlt: 0.3,
      color: colors[2],
    },
  ];

  return (
    <section className="w-full dark:bg-black bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-200 mt-2">
            Estou sempre aberto a novas oportunidades e colaborações.
          </p>
        </div>
        <ContactClient globeConfig={globeConfig} sampleArcs={sampleArcs} />
      </div>
    </section>
  );
}


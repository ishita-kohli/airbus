import { airports } from "@/data/airports";
import { FC } from "react";

interface weatherProps {
  iataCode: string;
}

const Weather: FC<weatherProps> = async ({ iataCode }) => {
  const airport = airports.find(
    (airport) => airport.iata_code.toLowerCase() === iataCode.toLowerCase()
  );

  if (!airport) return null;

  const weather = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${airport.lat}&lon=${airport.lng}&appid=8ca4ff917e1dfbb02345f1883582a2d8`
  ).then((res) => res.json());

  return (
    <div className="bg-gray-200 p-4 rounded-md dark:bg-gray-700">
      <div className="flex items-center gap-4">
        <WindIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
        <div>
          <h3 className="text-lg font-medium">{airport.iata_code}</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {weather
              ? `${weather.weather[0].main}, ${Math.round(
                  weather.main.temp - 273.15
                )}°C`
              : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;

function WindIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

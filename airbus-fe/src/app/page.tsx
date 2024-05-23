import { FlightMap } from "@/components/map";
import { Form } from "./_components/form";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home({
  searchParams,
}: {
  searchParams: {
    departure?: string;
    arrival?: string;
  };
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[400px_1fr]">
      <div className="flex flex-col gap-6 bg-gray-100 p-12 dark:bg-gray-800">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Flight Planner</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your flight details to see the route on the map and the
            current weather conditions.
          </p>
        </div>
        <Form {...searchParams} />
        <div className="bg-gray-200 p-4 rounded-md dark:bg-gray-700">
          <div className="flex items-center gap-4">
            <WindIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            <div>
              <h3 className="text-lg font-medium">Current Weather</h3>
              <p className="text-gray-500 dark:text-gray-400">Sunny, 25°C</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
        <FlightMap {...searchParams} />
      </div>
    </div>
  );
}

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

import { FlightMap } from "@/components/map";
import Weather from "@/components/weather";
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
        {searchParams.departure && (
          <Weather iataCode={searchParams.departure} />
        )}
        {searchParams.arrival && <Weather iataCode={searchParams.arrival} />}
      </div>
      <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
        <FlightMap {...searchParams} />
      </div>
    </div>
  );
}

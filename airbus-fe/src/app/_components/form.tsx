"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { airportName, airports } from "@/data/airports";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Form(params: { departure?: string; arrival?: string }) {
  const [departureOpen, setDepartureOpen] = useState(false);
  const [departure, setDeparture] = useState(params.departure || "");

  const [arrivalOpen, setArrivalOpen] = useState(false);
  const [arrival, setArrival] = useState(params.arrival || "");

  const router = useRouter();

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`?departure=${departure}&arrival=${arrival}`);
      }}
    >
      <div className="space-y-1">
        <Label htmlFor="departure">Departure Airport</Label>
        <Popover open={departureOpen} onOpenChange={setDepartureOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={departureOpen}
              className="w-full justify-between"
            >
              {departure
                ? airportName(
                    airports.find(
                      (airport) =>
                        airport.iata_code.toLowerCase() ===
                        departure.toLowerCase()
                    )
                  )
                : "Select airport..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Search airport..." />
              <CommandEmpty>No airport found.</CommandEmpty>
              <CommandGroup>
                {airports.map((airport) => (
                  <CommandItem
                    key={airport.iata_code}
                    value={airport.iata_code}
                    onSelect={(currentValue) => {
                      console.log(currentValue);
                      setDeparture(
                        currentValue === departure
                          ? ""
                          : currentValue.toUpperCase()
                      );
                      setDepartureOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        departure === airport.iata_code
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {airportName(airport)}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="space-y-1">
        <Label htmlFor="arrival">Arrival Airport</Label>
        <Popover open={arrivalOpen} onOpenChange={setArrivalOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={arrivalOpen}
              className="w-full justify-between"
            >
              {arrival
                ? airportName(
                    airports.find(
                      (airport) =>
                        airport.iata_code.toLowerCase() ===
                        arrival.toLowerCase()
                    )
                  )
                : "Select airport..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Search airport..." />
              <CommandEmpty>No airport found.</CommandEmpty>
              <CommandGroup>
                {airports.map((airport) => (
                  <CommandItem
                    key={airport.iata_code}
                    value={airport.iata_code}
                    onSelect={(currentValue) => {
                      setArrival(
                        currentValue === arrival
                          ? ""
                          : currentValue.toUpperCase()
                      );
                      setArrivalOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        arrival === airport.iata_code
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {airportName(airport)}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <Button className="w-full" type="submit">
        Plan Flight
      </Button>
    </form>
  );
}

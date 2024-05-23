"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Form(params: { departure?: string; arrival?: string }) {
  const [departure, setDeparture] = useState(params.departure || "");
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
        <Input
          id="departure"
          placeholder="Enter departure airport"
          type="text"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="arrival">Arrival Airport</Label>
        <Input
          id="arrival"
          placeholder="Enter arrival airport"
          type="text"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />
      </div>
      <Button className="w-full" type="submit">
        Plan Flight
      </Button>
    </form>
  );
}

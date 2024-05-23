import Image from "next/image";
import { Suspense } from "react";

export function FlightMap({
  departure,
  arrival,
}: {
  departure?: string;
  arrival?: string;
}) {
  if (!departure || !arrival) {
    return <div>Missing departure or arrival</div>;
  }

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <FlightMapImage departure={departure} arrival={arrival} />
      </Suspense>
    </div>
  );
}

export async function FlightMapImage({
  departure,
  arrival,
}: {
  departure: string;
  arrival: string;
}) {
  const imageURI = await fetch(
    `http://127.0.0.1:5000/plot?origin=${departure}&dest=${arrival}`,
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.uri === "error") {
        return "error";
      }
      return `http://127.0.0.1:5000/${data.uri}`;
    })
    .catch((err) => {
      return "error";
    });

  if (imageURI === "error") {
    return <div>Failed to load image</div>;
  }

  return <Image src={imageURI} alt="Flight Map" width={900} height={600} />;
}

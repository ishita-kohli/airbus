import Image from "next/image";
import { Suspense } from "react";

const BACKEND_URI = process.env.BACKEND_URI!;

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
    `${BACKEND_URI}/plot?origin=${departure}&dest=${arrival}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.uri === "error") {
        return "error";
      }
      return `${BACKEND_URI}/${data.uri}`;
    })
    .catch((err) => {
      return "error";
    });

  console.log(imageURI);

  if (imageURI === "error") {
    return <div>Failed to load image</div>;
  }

  return <Image src={imageURI} alt="Flight Map" width={900} height={600} />;
}

import csv
import requests
from tqdm import tqdm


base_url = "https://api.weather.gov/gridpoints/"
api_key = "1234567890"  # Replace with your NOAA API key

# Time (choose a specific observation time)
observation_time = "2023-11-19T18:00:00Z"  # Example: YYYY-MM-DDTHH:MM:SSZ format

# Input CSV file (replace with your actual file path)
airports_data_file = "lat-lon-data/us-airport-codes.csv"

# Output file
output_file = "wind_tes.tsv"

# Initialize empty dictionary to store airport data
airports = {}
count = 0


# Read data from CSV file
with open(airports_data_file, newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in tqdm(reader, desc = "Reading airports"):
        # Check if IATA code and coordinates are present
        if "iata_code" in row and "coordinates" in row and row["iata_code"]:
            try:
                # Extract data (assuming headers as ident, iata_code, latitude, longitude)
                airport_id = row["ident"]  # You can use a different identifier if needed
                iata_code = row["iata_code"]
                coordinates = row["coordinates"].split(",")
                latitude = float(coordinates[0].strip()) if coordinates[0] else None
                longitude = float(coordinates[1].strip()) if coordinates[1] else None

                # Check for valid latitude and longitude
                if latitude is not None and longitude is not None:
                    count += 1
                    if count >= 50:
                        break
                    airports[airport_id] = {"iata_code": iata_code, "latitude": latitude, "longitude": longitude}
            except (ValueError, KeyError):  # Handle potential errors during data extraction
                print(f"Error processing row for airport {iata_code}")


# Loop through airports and collect wind data
with open(output_file, 'w', newline='') as tsvfile:
    writer = csv.writer(tsvfile, delimiter='\t')
    writer.writerow(["FT", "30000"])  # Header row

    for airport_id, airport_info in tqdm(airports.items(), desc = "Wind data"):
        iata_code = airport_info["iata_code"]
        latitude = airport_info["latitude"]
        longitude = airport_info["longitude"]


        # Construct API request URL (using gridpoint endpoint)
        url = f"{base_url}{latitude},{longitude}"
        params = {"forecast": observation_time, "gridX": 120000, "gridY": 120000, "gridId": "G2C", "key": api_key}

        # Send API request
        try:
            response = requests.get(url, params=params)
            response.raise_for_status()  # Raise exception for non-200 status codes

            # Parse JSON response (assuming successful response)
            data = response.json()
            properties = data["properties"]

            print(data)
            break
            # Extract wind data (handle potential missing data)
            wind_speed = properties.get("windSpeed", None)
            wind_direction = properties.get("windDirection", None)

            # Check for missing data and skip airports with no wind information
            if wind_speed is None or wind_direction is None:
                continue

            # Format wind data
            combined_data = f"{wind_direction:.0f}+{wind_speed:.0f}"
            print(combined_data)

            # Write data to TSV file
            writer.writerow([iata_code, combined_data])

        except requests.exceptions.RequestException as e:  # Handle API request errors
            print(f"Error retrieving wind data for {iata_code}: {e}")

print(f"Wind data written to {output_file}")

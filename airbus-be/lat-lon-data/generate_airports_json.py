import csv
import json
from tqdm import tqdm

airports = []

with open('lat-lon-data/us-airport-codes.csv', 'r') as f:
    reader = csv.reader(f)
    next(reader)  # Skip the header
    for row in tqdm(reader):
        lat, lng = row[11].split(',')
        iata_code = row[9]
        name = row[2]
        if not lat or not lng or not iata_code or not name:
            continue
        
        airport = {
            'iata_code': iata_code.strip(),
            'lat': lat.strip(),
            'lng': lng.strip(),
            'name': name.strip()
        }
        airports.append(airport)

with open('airports.json', 'w') as f:
    json.dump(airports, f)
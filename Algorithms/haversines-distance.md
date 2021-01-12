# Haversine Distance Formula

This uses the ‘haversine’ formula to calculate the great-circle distance between two points – that is, the shortest distance over the earth’s surface.

### Applications
- Mostly used in Navigation
- Searching Cabs within 10kms from a passengers location

## Haversine formula:
```
	a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
    c = 2 ⋅ atan2( √a, √(1−a) )
    d = R ⋅ c
```

    If atan2 is not available, c could be calculated from 2 ⋅ asin( min(1, √a) ) (including protec­tion against rounding errors).

where,
φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);

Note that angles need to be in radians to pass to trig functions!

### JavaScript:

```js
const R = 6371e3; // metres
const φ1 = lat1 * Math.PI/180; // φ, λ in radians
const φ2 = lat2 * Math.PI/180;
const Δφ = (lat2-lat1) * Math.PI/180;
const Δλ = (lon2-lon1) * Math.PI/180;

const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

const d = R * c; // in metres
```

Where, c is angular distance in radians
       a is square of half the chord length between the points.


### Python :

```python
def distance (origin, destination):

       lat1, lon1 = origin
       lat2, lon2 = destination
       radius = 6371 #km

       dlat = math.radians(lat2-lat1)
       dlon = math.radians(lon2-lon1)
       a = math.sin(dlat/2) * math.sin(dlat/2) + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin((dlon/2)) * math.sin(dlon/2)

       c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
       d = radius * c

       return d

origin = (41.1792,73.1894)    # Bridgeport CT USA
destination = (41.0772, 73.4687)  # Darien CT USA

print("Distance in KM : {} ".format(distance(origin, destination)))
```
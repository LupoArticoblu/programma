# si usa per i commenti

from geopy.geocoders import Nominatim
from geopy.distance import geodesic

def ottieni_coordinate(città):
  geolocatore = Nominatim(user_agent="lunghezza_km_da_napoli")
  posizione = geolocatore.geocode(città)
  return posizione.latitude, posizione.longitude

def calcola_distanza(città):
  cordinate_napoli = (40.8518, 14.2681)
  cordinate_dest = ottieni_coordinate(città)
  dista = geodesic(cordinate_napoli, cordinate_dest).kilometers
  return dista

name = "chiappe"
age = 22


print("Ciao! \n sono " + name + " ed ho " + str(age) + " anni")

user_name = input("Tu come ti chiami? ")

print("Quindi ti chiami " + user_name)

user_age = int(input("quanti anni hai? "))
difference = user_age - age

print(str(user_age) + " anni?! ma quindi abbiamo " + str(difference) + " anni di differenza!" )

print("Io sono di Napoli")

city = input("tu di dove sei? ")

distanza = calcola_distanza(city)
print(f"Sei di {city} ? ma allora siamo a {distanza:.2f} Km di distanza")


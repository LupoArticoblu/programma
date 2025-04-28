print("CARTA-FORBICI-SASSO")
#PRIMA VARIABILE
Premio = "5 crediti"

print("Premio in palio: " + Premio)

print("\nCome ti chiami?")

#variabile inserita tramite l'input da tastiera
nome = input()
print("Buona fortuna " + nome + "!")

print("\nScegli ora:")
#PRIMA LISTA o ARRAY
morra =['carta','forbici','sasso']

#primo ciclo for
for item in morra:
  print(item)

print("premi 0 carta, 1 forbici, 2 sasso")
#input numero
numero_scelto = int(input())

item_scelto = morra[numero_scelto]

print("\nHai scelto: " + item_scelto)

pithon_item =""
#PRIMO IF
if(item_scelto == "carta"):
  pithon_item = "forbici"
if(item_scelto == "forbici"):
  pithon_item = "sasso"
if(item_scelto == "sasso"):
  pithon_item = "carta"

print('\nAnche Pithon ha fatto la sua scelta, premi INVIO')
input()
print('\nPithon ha scelto ' + pithon_item)
print('\nMi spiace ' + nome + ', HAI PERSO! ritenta e sarai più fortunato')
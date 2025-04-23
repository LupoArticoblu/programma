import datetime

# Dizionario per memorizzare gli impegni
agenda = {day: [] for day in ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]}

def aggiungi_impegno():
    giorno = input("Inserisci il giorno della settimana: ").capitalize()
    if giorno in agenda:
        impegno = input("Inserisci l'impegno: ")
        agenda[giorno].append(impegno)
        print(f"Impegno aggiunto a {giorno}.")
    else:
        print("Giorno non valido. Riprova.")

def visualizza_agenda():
    for giorno, impegni in agenda.items():
        print(f"\n{giorno}:")
        if impegni:
            for i, impegno in enumerate(impegni, 1):
                print(f"  {i}. {impegno}")
        else:
            print("  Nessun impegno.")

def rimuovi_impegno():
    giorno = input("Inserisci il giorno della settimana: ").capitalize()
    if giorno in agenda and agenda[giorno]:
        visualizza_agenda()
        try:
            indice = int(input(f"Seleziona il numero dell'impegno da rimuovere in {giorno}: ")) - 1
            if 0 <= indice < len(agenda[giorno]):
                rimosso = agenda[giorno].pop(indice)
                print(f"Impegno '{rimosso}' rimosso da {giorno}.")
            else:
                print("Indice non valido.")
        except ValueError:
            print("Inserisci un numero valido.")
    else:
        print("Nessun impegno trovato o giorno non valido.")

def menu():
    while True:
        print("\n--- Agenda Settimanale ---")
        print("1. Aggiungi impegno")
        print("2. Visualizza agenda")
        print("3. Rimuovi impegno")
        print("4. Esci")
        scelta = input("Seleziona un'opzione: ")

        if scelta == "1":
            aggiungi_impegno()
        elif scelta == "2":
            visualizza_agenda()
        elif scelta == "3":
            rimuovi_impegno()
        elif scelta == "4":
            print("Uscita dall'agenda. A presto!")
            break
        else:
            print("Opzione non valida. Riprova.")

if __name__ == "__main__":
    menu()
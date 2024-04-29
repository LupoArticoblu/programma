from langchain import Paperino
import openai 

paperino = Paperino()

risposta_paperino = paperino.converti(risposta_chatgpt)

print(risposta_paperino)
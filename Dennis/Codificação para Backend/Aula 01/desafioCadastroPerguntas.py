class Question:
    def __init__(self, pergunta, opcao1, opcao2, opcao3, opcao4, resposta):
        self.pergunta = pergunta
        self.opcao1 = opcao1
        self.opcao2 = opcao2
        self.opcao3 = opcao3
        self.opcao4 = opcao4
        self.resposta = resposta

def appendListaQuestion():
    listaQuestion.append(Question(
    input("Insira uma pergunta: "),
    input("Insira a opção a: "),
    input("Insira a opção b: "),
    input("Insira a opção c: "),
    input("Insira a opção d: "),
    input("Insira a letra correta: ")
    ))

def listarListaQuestion():
    print("")

listaQuestion = []

while True:
    opcao = input("""Jogo de perguntas e respostas
[1] - Inserir uma pergunta com respostas nova
[2] - Listar as perguntas e respostas do jogo
[3] - Jogar 
[4] - Sair do programa                 
Escolha a opção que você deseja: """)

    if(opcao == 1):
        appendListaQuestion()
    elif(opcao == 4):
        break

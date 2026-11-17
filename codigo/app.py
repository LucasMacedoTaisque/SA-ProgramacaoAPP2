import time

contas = {}   # {"Lucas": "endereço"}
pedidos = {}  # {codigo: {"cliente", "item", "rest", "preco", "status"}}
codigo = 1

STATUS = ["Em preparação", "A caminho", "Entregue"]

# restaurante: (abre, fecha, itens)
restaurantes = {
    "Pizzaria Napoli": (18, 23, {"Margherita": 40.00, "Calabresa": 42.00}),
    "Burger Z": (11, 22, {"X-Burger": 25.00, "X-Bacon": 30.00}),
    "Padaria Central": (6, 12, {"Pão Francês": 1.50, "Café": 5.00}),
}

nomes = list(restaurantes)


# devolve True se o restaurante está aberto agora
def esta_aberto(nome):
    abre, fecha, itens = restaurantes[nome]
    hora = time.localtime().tm_hour
    return abre <= hora < fecha


# repete a pergunta até a resposta não ser vazia
def pedir(texto):
    resposta = input(texto)
    while resposta.strip() == "":
        print("Não pode ficar vazio")
        resposta = input(texto)
    return resposta


# pergunta rua, número e bairro e devolve o endereço pronto
def pedir_endereco():
    rua = pedir("Rua: ")
    numero = pedir("Número: ")
    while not numero.isdigit():
        print("Utilize apenas NÚMEROS")
        numero = pedir("Número: ")
    bairro = pedir("Bairro: ")
    return f"{rua}, {numero} - {bairro}"


# ---------- MENU PEDIDOS ----------
def menu_pedidos(nome):
    while True:
        print("\n===Pedidos===")
        print("1 - Minha conta")
        print("2 - Meus pedidos")
        print("3 - Editar endereço")
        print("4 - Cancelar pedido")
        print("0 - Voltar")
        op = input("Escolha: ")

        if op == "1":
            print(f"\nNome: {nome}")
            print(f"Endereço: {contas[nome] or 'nenhum ainda'}")

        elif op == "2":
            print("\n===Meus pedidos===")
            for cod, p in pedidos.items():
                if p["cliente"] == nome:
                    print(f"#{cod} - {p['item']} ({p['rest']}) - {p['status']}")

        # UPDATE
        elif op == "3":
            contas[nome] = pedir_endereco()
            print("Endereço atualizado!")

        # DELETE (só se ainda estiver "Em preparação")
        elif op == "4":
            cod = input("Código do pedido: ")
            if cod.isdigit() and int(cod) in pedidos:
                p = pedidos[int(cod)]
                if p["cliente"] == nome and p["status"] == STATUS[0]:
                    del pedidos[int(cod)]
                    print("Pedido cancelado!")
                else:
                    print("Esse pedido não pode ser cancelado")
            else:
                print("Código não encontrado")

        elif op == "0":
            break
        else:
            print("Opção inválida")


# ---------- MENU DONO (SÓ PARA TESTE, depois será retirado) ----------
def menu_dono():
    cod = input("\nCódigo do pedido: ")

    if cod.isdigit() and int(cod) in pedidos:
        for i, s in enumerate(STATUS, 1):
            print(f"{i} - {s}")
        novo = input("Escolha o status: ")

        if novo.isdigit() and 1 <= int(novo) <= len(STATUS):
            pedidos[int(cod)]["status"] = STATUS[int(novo) - 1]
            print("Status atualizado!")
        else:
            print("Status inválido")
    else:
        print("Código não encontrado")


# ---------- MENU INICIAL ----------
while True:
    print("\n===NovaTech===")
    print("1 - Criar Conta")
    print("0 - Sair")
    opcao = input("Escolha: ")

    if opcao == "1":
        nome = input("Escreva seu Nome: ")
        while not nome.replace(" ", "").isalpha():
            print("Utilize apenas LETRAS")
            nome = input("Escreva seu Nome: ")

        contas.setdefault(nome, "")
        print(f"Conta de {nome} criada!")

        # ---------- LISTA DE RESTAURANTES ----------
        while True:
            print("\n===Restaurantes===")
            for i, rest in enumerate(nomes, 1):
                status = "ABERTO" if esta_aberto(rest) else "FECHADO"
                print(f"{i} - {rest} [{status}]")
            print("P - Pedidos")
            print("D - DONO (teste)")
            print("0 - Sair da conta")

            esc = input("Escolha: ").upper()

            if esc == "0":
                break
            elif esc == "P":
                menu_pedidos(nome)
            elif esc == "D":
                menu_dono()

            elif esc.isdigit() and 1 <= int(esc) <= len(nomes):
                rest = nomes[int(esc) - 1]

                if esta_aberto(rest):
                    # ---------- CARDÁPIO ----------
                    itens = list(restaurantes[rest][2].items())

                    print(f"\n===Cardápio - {rest}===")
                    for i, (item, preco) in enumerate(itens, 1):
                        print(f"{i} - {item} - R$ {preco:.2f}")
                    print("0 - Voltar")

                    esc_item = input("Escolha o item: ")

                    if esc_item.isdigit() and 1 <= int(esc_item) <= len(itens):
                        item, preco = itens[int(esc_item) - 1]

                        # ---------- ENDEREÇO E PEDIDO ----------
                        print("\n===Endereço de entrega===")
                        endereco = pedir_endereco()
                        contas[nome] = endereco
                        pedidos[codigo] = {
                            "cliente": nome,
                            "item": item,
                            "rest": rest,
                            "preco": preco,
                            "status": STATUS[0],
                        }
                        print("\n===Resumo do pedido===")
                        print(f"Código: #{codigo}")
                        print(f"{item} ({rest}) - R$ {preco:.2f}")
                        print(f"Entregar em: {endereco}")
                        codigo += 1

                    elif esc_item != "0":
                        print("Item inválido")
                else:
                    print(f"\n{rest} está fechado.")
            else:
                print("Opção inválida")

    elif opcao == "0":
        print("Saindo...")
        break
    else:
        print("Opção Inválida")
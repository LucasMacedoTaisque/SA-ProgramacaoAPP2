
# Devolutiva formativa — Atividade 01 da SA

**Estudante:** Lucas  
**Turma:** Rio Negrinho — Tarde  
**Unidade Curricular:** Programação de Aplicativos  
**Projeto implementado:** Delivery de comida — NovaTech  
**Código analisado:** `codigo/app.py`  
**Referência:** Situação de Aprendizagem nº 1 — *Da Ideia ao Código*

## O que você já conseguiu desenvolver

Lucas, você desenvolveu um sistema de delivery que permite cadastrar usuários, consultar restaurantes, selecionar produtos, informar endereços e acompanhar pedidos. O projeto demonstra compreensão de várias regras de negócio de uma aplicação de entregas.

Pontos positivos identificados:

- Organizou funcionalidades em funções como `esta_aberto()`, `pedir()`, `pedir_endereco()`, `menu_pedidos()` e `menu_dono()`.
- Utilizou **dicionários e listas** para representar restaurantes, produtos, contas e pedidos.
- Implementou uma verificação de horário de funcionamento dos restaurantes.
- Criou um fluxo para selecionar produtos e registrar pedidos com identificação e situação.
- Validou campos obrigatórios e restringiu o número do endereço a caracteres numéricos.
- Incluiu a consulta de pedidos e a possibilidade de cancelamento enquanto estão em preparação.
- Utilizou comentários que identificam as principais funções e regras do programa.

## O que precisa ser corrigido

### 1. Alinhar o projeto ao README

O README identifica o trabalho como **Streaming de vídeo**, mas o código implementa um sistema de **delivery de comida**.

**Como melhorar:** confirmar o tema escolhido e atualizar o README com o nome do aplicativo, suas funcionalidades e as instruções de execução.

### 2. Proteger as operações administrativas

A opção `D - DONO (teste)` está disponível no menu utilizado pelos clientes. Qualquer usuário consegue acessar `menu_dono()` e alterar o status de pedidos.

**Como melhorar:** separar o acesso administrativo das funções do cliente. Enquanto o recurso for utilizado apenas para testes, identificá-lo claramente e não tratá-lo como uma funcionalidade protegida.

### 3. Controlar as alterações de status

A função `menu_dono()` permite atribuir qualquer situação da lista `STATUS`, independentemente da situação anterior.

Isso permite, por exemplo, alterar diretamente um pedido de "Entregue" para "Em preparação".

**Como melhorar:** definir quais transições são permitidas e impedir alterações incompatíveis com o andamento do pedido.

### 4. Diferenciar usuários com o mesmo nome

As contas são identificadas apenas pelo nome informado. Isso permite que duas pessoas utilizem a mesma identificação e consultem informações associadas a ela.

**Como melhorar:** utilizar um identificador único para cada conta e, em uma versão futura, implementar autenticação adequada.

## Oportunidades de melhoria

### 5. Separar o menu principal em funções

As operações de criação de conta, escolha de restaurante, seleção de produto e confirmação de pedido estão concentradas em um bloco extenso de repetição.

**Como melhorar:** criar funções para cada etapa, diminuindo a complexidade do fluxo principal.

### 6. Preparar a persistência das informações

As informações são mantidas em dicionários enquanto o programa está aberto. Isso atende ao desenvolvimento inicial, mas os pedidos são perdidos ao encerrar a execução.

**Próximo passo:** planejar o armazenamento permanente para a etapa de banco de dados. Essa integração não era exigência da Atividade 01.

### 7. Melhorar a documentação

O README ainda contém principalmente o modelo geral fornecido para a atividade.

**Como melhorar:** acrescentar uma descrição do funcionamento da NovaTech, instruções de execução, exemplos de uso e limitações da versão atual.

## Testes recomendados

1. Criar uma conta e cadastrar um endereço válido.
2. Tentar informar campos vazios e número de endereço inválido.
3. Consultar restaurantes abertos e fechados.
4. Registrar um pedido e consultar seu histórico.
5. Cancelar um pedido em preparação.
6. Tentar cancelar um pedido que já foi entregue.
7. Tentar acessar uma operação administrativa como cliente.
8. Alterar o status de um pedido e verificar as transições permitidas.

## Prioridades para a próxima versão

1. **Corrigir a identificação do projeto no README.**
2. **Restringir o acesso às funções administrativas.**
3. **Validar as transições entre situações dos pedidos.**
4. **Diferenciar as contas dos usuários.**
5. **Modularizar o fluxo principal e registrar os testes.**

## Mensagem final

Lucas, seu projeto mostra uma boa compreensão de **funções, listas, dicionários, validações e regras de negócio**. Você desenvolveu um fluxo de pedidos com várias funcionalidades relacionadas entre si.

Agora, concentre-se principalmente no controle de acesso, na consistência das alterações e na organização do código. **Continue aprimorando cada etapa e testando as situações que podem ocorrer durante o uso.** Essas melhorias ajudarão a transformar sua solução inicial em uma aplicação mais confiável.

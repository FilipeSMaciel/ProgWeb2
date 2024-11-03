# UniSENAC - Análise e Desenvolvimento de Sistemas

### Programação Web - Segundo Semestre

### Atividade Avaliativa 2

### Projeto: CircuitHub - Catálogo de Hardware e Gadgets para Programadores

#### Descrição:

O CircuitHub será um catálogo de dispositivos e acessórios voltado para programadores, que permitirá ao usuário explorar e gerenciar uma lista de hardware e gadgets úteis, como laptops, monitores, teclados mecânicos e outros acessórios de tecnologia. O usuário poderá adicionar novos itens à lista, ver detalhes, marcar itens como "Tenho" ou "Desejo comprar", e salvar as preferências no localStorage.


#### Atributos a serem armazenados:

Para cada item do catálogo, serão armazenados os seguintes atributos:

- Nome: Nome do gadget ou hardware (ex: "Teclado Mecânico XYZ").
- Descrição: Breve descrição do item e suas principais características.
- Categoria: Classificação do item (ex: "Teclado", "Monitor", "Notebook").
- Preço: Preço aproximado ou médio do produto.
- Imagem: URL da imagem do produto.
- Status: Indica se o usuário "Possui" ou "Deseja comprar" o item.


#### Funcionalidades e Interações:


- Adicionar Item: O usuário pode adicionar novos itens ao catálogo, preenchendo um formulário com os atributos acima. Para acessar o formulário, um botão deve ser pressionado, e uma modal com o formulário se ativará. Após o cadastro, o novo item é exibido na listagem e salvo em localStorage.
Marcar Status: Cada item da lista terá uma opção para o usuário marcar como "Tenho" ou "Desejo comprar". Esta ação é persistida no localStorage.
- Detalhes e Avaliação: O usuário pode ver detalhes de cada item em uma página específica, onde também pode avaliar ou comentar o produto.


#### Rotas da Aplicação:


- Página Principal (/home): Exibe a lista de gadgets adicionados, com suas informações principais (nome, descrição, categoria e status).
- Página de Detalhes do Item (/detalhes): Exibe informações detalhadas sobre um item específico, com possibilidade de marcar status, avaliar, e adicionar comentários.


### Grupo:

- Filipe Maciel
- Pedro Hasse Niemczewski


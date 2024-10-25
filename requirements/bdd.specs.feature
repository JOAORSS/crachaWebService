Feature: Passar o cartão NFC na catraca COM internet

    Caso um aluno passe o cartão NFC na catraca, quero 
    que o sistema valide se o cartão é ou não é de um aluno
    para poder controlar a entrada do colégio


Scenario: Obtendo e trabalhando os dados no WebService

    Dado que o sistema da catraca está conectado a internet
    E os dados não estão salvos no cache
    Quando o aluno passar o NFC pelo scanner, ele vai enviar o 
    seu token NFC para o WebService que ira valida-lo
    Entao se for válido a catraca irá acionar e os dados serão adicionados ao cache

    Dado que o sistema da catraca está conectado a internet
    E os dados não estão salvos no cache
    Quando o aluno passar o NFC pelo scanner, ele vai enviar o 
    seu token NFC para o WebService que ira valida-lo e
    Entao o cartão passa um token invalid a catraca irá irá responder com uma mensagem de acesso negado

Feature: Passar o cartão caso SEM internet

    Com o sistema ofline quero que ele puxe de um banco de dados local
    os dados para a validação, como não é um software que constantemente
    terá novas matriculas é uma solucao viavel

Scenario: Obtendo os dados pelo chace e tabalhando localmente 

    Dado que o sistema está offline 
    E o banco estára armazenado localmente no cache do computador local,
    Quando passar o NFC ela ira procurar nos seus registros do cache (já validados)
    Então acionará caso o registro já estiver implementado no cache

    Dado que o sistema está offline 
    E o banco estára armazenado localmente no cache do computador local,
    Quando passar o NFC ela ira procurar nos seus registros do cache (já validados)
    Então ao passar o NFC e não tiver nenhum registro no cache ele buscara no banco de backup os dados de login
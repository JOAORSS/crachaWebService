/////////// tabela com do nosso banco mas como se fosse uma classe //////////////

interface schemaInterface {
    matricula: string
    nome: string
    token: string
    ultimoAcesso: string
}

class schema implements schemaInterface{
    public matricula
    public nome
    public token
    public ultimoAcesso

    constructor(matricula: string, nome: string, token: string, ultimoAcesso: string) {
        this.matricula = matricula;
        this.nome = nome
        this.token = token
        this.ultimoAcesso = ultimoAcesso
    }
}

export default schema;
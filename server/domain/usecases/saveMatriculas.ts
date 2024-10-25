export interface SaveMatriculas {
    save: (alunosModel: Array<SaveMatriculas.Params>) => Promise<void>
}

// se tivesse retorno a gente poderia salvar como SavaMatriculas.Results

namespace SaveMatriculas{
    export type Params = {
        matricula: string
        nome: string
        token: string
    }
    
}

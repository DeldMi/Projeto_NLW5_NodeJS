interface DadosDoUsuario {
    id: string, nome: string, email: string
}

function cadastroUsuario({ id, nome, email }: DadosDoUsuario) {
    console.log(id, nome, email)
}



class CadastrarAdmin {
    cadastro() {
        cadastroUsuario("a", "b", "c")
    }
}
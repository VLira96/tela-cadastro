export class User {
    constructor(
        protected nome: string,
        protected email: string,
        protected senha: string
    ) { }

    segNome(nome: string) {
        this.nome = nome;
    }

    getNome() {
        return this.nome;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setSenha(senha: string) {
        this.senha = senha;
    }

    getSenha() {
        return this.senha;
    }

}
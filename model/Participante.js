class Participante{
    // Atributos
    id;
    nome;
    email;
    senha;
    endereco;
    telefone;


    constructor(id, nome, email, senha, endereco, telefone){
        this.setId(id)
        this.setNome(nome)
        this.setEmail(email)
        this.setSenha(senha)
        this.setEndereco(endereco)
        this.setTelefone(telefone)
    }

    // Setters
    setId(id){
        this.id = id;
    }
    setNome(nome){
        this.nome = nome;
    }
    setEmail(email){
        this.email = email;
    }
    setSenha(senha){
        this.senha = senha;
    }
    setEndereco(endereco){
        this.endereco = endereco;
    }
    setTelefone(telefone){
        this.telefone = telefone;
    }

    // Getters
    getId(){
        return this.id;
    }
    getNome(){
        return this.nome;
    }
    getEmail(){
        return this.email;
    }
    getSenha(){
        return this.senha;
    }
    getEndereco(){
        return this.endereco;
    }
    getTelefone(){
        return this.telefone;
    }

    // Métodos
    loginParticipante(email, senha){
        if(this.email == email && this.senha == senha){
            alert('login efetuado com sucesso!')
            return true;
        }else {
            alert("verifique o email ou a senha")
            return false;
        }
    }

    registraParticipante(nome, email, senha, endereco, telefone){
        this.setNome(nome)
        this.setEmail(email)
        this.setSenha(senha)
        this.setEndereco(endereco)
        this.setTelefone(telefone)
        console.log(this.getId ,this.getNome, this.getEmail, this.getSenha,this.getEndereco, this.getTelefone)
    }
    
}

// export { Participante };
module.exports = Participante;

class Lance{
    id;
    valor;
    momento;
    participante;

    constructor(id, valor, momento, participante){
        this.id = id;
        this.valor = valor;
        this.momento = momento;
        this.participante = participante;
    }

    // Setters
    setId(id){
        this.id = id;
    }
    setValor(valor){
        this.valor = valor;
    }
    setMomento(momento){
        this.momento = momento;
    }
    setParticipante(participante){
        this.participante = participante;
    }

    // Getters
    getId(){
        return this.id;
    }
    getValor(){
        return this.valor;
    }
    getMomento(){
        return this.momento;
    }
    getParticipante(){
        return this.participante;
    }

    // Métodos
    registrarLance(valor, participante){
        if(valor > this.valor){
            this.valor = valor;
            this.participante = participante;
        }

    }
}

export {Lance}
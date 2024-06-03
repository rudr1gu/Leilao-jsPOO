class Leilao{
    id;
    dataInicio;
    dataFim;
    horarioInicio;
    horarioFim;
    items

    constructor(id, dataInicio, dataFim, horarioInicio, horarioFim, items){
        this.id = id;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
        this.items = items;
    }

    // Setters
    setId(id){
        this.id = id;
    }
    setDataInicio(dataInicio){
        this.dataInicio = dataInicio;
    }
    setDataFim(dataFim){
        this.dataFim = dataFim;
    }
    setHorarioInicio(horarioInicio){
        this.horarioInicio = horarioInicio;
    }
    setHorarioFim(horarioFim){
        this.horarioFim = horarioFim;
    }
    setItems(items){
        this.items = items;
    }

    // Getters
    getId(){
        return this.id;
    }
    getDataInicio(){
        return this.dataInicio;
    }
    getDataFim(){
        return this.dataFim;
    }
    getHorarioInicio(){
        return this.horarioInicio;
    }
    getHorarioFim(){
        return this.horarioFim;
    }
    getItems(){
        return this.items;
    }

    // Métodos
    iniciarLeilao(){
       return this.dataInicio == Date.now();
    }
    finalizarLeilao(){
        return this.dataFim == Date.now();
    }
    consultarLeilao(){
        return this.items;
    }
}

export {Leilao}
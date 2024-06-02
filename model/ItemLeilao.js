class ItemLeilao{
    id;
    titulo;
    descricao;
    lanceMinimo;
    itemArrematado;
    lance;

    constructor(id, titulo, descricao, lanceMinimo, itemArrematado, lance){
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.lanceMinimo = lanceMinimo;
        this.itemArrematado = itemArrematado;
        this.lance = lance;
    }

    // Setters
    setId(id){
        this.id = id;
    }
    setTitulo(titulo){
        this.titulo = titulo;
    }
    setDescricao(descricao){
        this.descricao = descricao;
    }
    setLanceMinimo(lanceMinimo){
        this.lanceMinimo = lanceMinimo;
    }
    setItemArrematado(itemArrematado){
        this.itemArrematado = itemArrematado;
    }
    setLance(lance){
        this.lance = lance;
    }

    // Getters
    getId(){
        return this.id;
    }
    getTitulo(){
        return this.titulo;
    }
    getDescricao(){
        return this.descricao;
    }
    getLanceMinimo(){
        return this.lanceMinimo;
    }
    getItemArrematado(){
        return this.itemArrematado;
    }
    getLance(){
        return this.lance;
    }
}

export {ItemLeilao}
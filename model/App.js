import { ItemLeilao } from "./class/ItemLeilao.js";
// import { Participante } from "./Participante.js";
import { Leilao } from "./class/Leilao.js";
import { Lance } from "./class/Lance.js";


let leilao = new Leilao(1, "2021-10-01", "2021-10-10", "10:00", "18:00", []);
// let participante = new Participante(1, "João", "joao@gmail.com", "123456","rua x", "99999999");
let items = new ItemLeilao(1, "Carro", "Carro novo", 10000, false, 0);
let lance = new Lance(1, 0, Date.now(), participante);
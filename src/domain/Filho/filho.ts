import { PosicaoGlobal } from "../posicaoglobal/posicaoglobal";

export class Filho{

    constructor(
        public id: number,
        public telefone: number,
        public nome: string,
        public foto: string,
        public emViagem: boolean = false,
        public embarcado: boolean = false,
        public posicaoGlobal: PosicaoGlobal = null)
    {}

}
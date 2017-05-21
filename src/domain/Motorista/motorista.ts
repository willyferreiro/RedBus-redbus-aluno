import { Usuario } from "../usuario/usuario";

export class Motorista{

    constructor(
        public Usuario: Usuario,
        public idUsuario: number,
        public emViagem: boolean,
        public posicao_latitude: number,
        public posicao_longitude: number,
        public foto: ByteString
    ){}
}
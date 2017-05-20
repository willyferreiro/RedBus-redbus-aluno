import { Usuario } from "../usuario/usuario";

export class Responsavel {

    constructor (
        public Usuario: Usuario,
        public idUsuario: number
    ){}
}
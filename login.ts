import { filme } from "./filmes";

export class codLogin{
    constructor (public nome: string, public email: string, private senha: string, public listaFav: Array<filme>){
    };
    addFavorito(filme: filme){
        this.listaFav.push(filme);
    }
};

//export var listaFav: string [] = ["Star Wars", "Avatar", "Rio"];





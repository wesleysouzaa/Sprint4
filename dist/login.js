"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codLogin = void 0;
var codLogin = /** @class */ (function () {
    function codLogin(nome, email, senha, listaFav) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.listaFav = listaFav;
    }
    ;
    codLogin.prototype.addFavorito = function (filme) {
        this.listaFav.push(filme);
    };
    return codLogin;
}());
exports.codLogin = codLogin;
;
//export var listaFav: string [] = ["Star Wars", "Avatar", "Rio"];

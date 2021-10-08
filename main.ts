import {codLogin} from "./login";
import {filme} from './filmes';

const login1 = new codLogin ("Wesley", "wesleysouza@brq.com", "4545", []);

const filme1 = new filme ("Titanic", "Um artista pobre e uma jovem rica...", "Leonardo DiCaprio, Kate Winslet", "James Cameron", 2845, "Drama");

const filme2 = new filme ("De Volta Para o Futuro", "Marty McFly, um adolescente...", "Michel J. Fox", "Robert Zemeckis", 4536, "Aventura");

const filme3 = new filme ("Alice no País das Maravilhas", "Ainda garotinha, Alice Kingsleigh...", "Johnny Deep", "Tim Burton", 5899, "Drama");

console.log("======================INFORMAÇÕES DO USUARIO========================");


login1.addFavorito(filme1);

login1.addFavorito(filme2);

login1.addFavorito(filme3);

console.log(login1);
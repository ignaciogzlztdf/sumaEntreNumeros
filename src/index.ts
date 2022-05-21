import "./styles.css";

let n1: number | null = Number(prompt("Ingrese número inicial."));
let n2: number | null = Number(prompt("Ingrese número final."));
let suma: number = 0;
let contador: number = 0;
let sumaTotal: number = 0;

while (contador <= n2 - n1) {
  suma = n1 + contador;
  sumaTotal = sumaTotal + suma;
  contador = contador + 1;
}
console.log("El resultado de la suma es " + sumaTotal + ".");

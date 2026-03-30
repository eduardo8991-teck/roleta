const canvas = document.getElementById("roleta");
const ctx = canvas.getContext("2d");

const opcoes = ["Banner", "Cursor", "Ícones",
 "Background"];


     let giroTotal = 0;

function desenhar() {
  const total = opcoes.length;
  const angulo = (2 * Math.PI) / total;

  for (let i = 0; i < total; i++) {
    ctx.beginPath();
    ctx.moveTo(150, 150);

    ctx.arc(
      150, 150,   // centro
      150,        // tamanho
      angulo * i, // começo
      angulo * (i + 1) // fim
    );
   
if (i === 0) {
  ctx.fillStyle = "rgba(6, 8, 7, 0.67)";
}

if (i === 1) {
  ctx.fillStyle = "rgba(222, 114, 20, 0.92)";
}

if (i === 2) {
  ctx.fillStyle = "rgba(6, 8, 7, 0.67)";
}

if (i === 3) {
  ctx.fillStyle = "rgba(222, 114, 20, 0.92)";
}

ctx.fill();

    ctx.save();

    ctx.translate(150, 150);
    ctx.rotate(angulo * i + angulo / 2);

   ctx.fillStyle = "white";
ctx.font = "bold 18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
    
    ctx.fillText(opcoes[i], 80, 0);

    ctx.restore();

  }
}

desenhar();
function girar() {
  let giro = Math.random() * 360 + 720;

  giroTotal = giroTotal + giro;

  canvas.style.transform = "rotate(" + giroTotal + "deg)";

  let sorteado = Math.floor(Math.random() * opcoes.length);

  document.getElementById("resultado").innerText =
    "Resultado: " + opcoes[sorteado];
}

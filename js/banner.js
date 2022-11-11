var balls = document.querySelector(".balls");
var quant = document.querySelectorAll(".slides .images");
var atual = 0;
var imagem = document.getElementById("atual");
var next = document.getElementById("next");
var rolar = true;
var voltar = document.getElementById("voltar");


for (let i = 0; i < quant.length; i++) {
  var div = document.createElement("div");
  div.id = i;
  balls.appendChild(div);
}

document.getElementById("0").classList.add("imgAtual");

var pos = document.querySelectorAll(".balls div");

for (let i = 0; i < pos.length; i++) {
  pos[i].addEventListener("click", () => {
    e.preventDefault();
    e.stopPropagation();

    atual = pos[i].id;
    rolar = false;
    slide();
  });
}

voltar.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();

  atual--;
  rolar = false;
  slide();
});

next.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();

  atual++;
  rolar = false;
  slide();
});

function slide() {
  if (atual >= quant.length) {
    atual = 0;
  } else if (atual < 0) {
    atual = quant.length - 1;
  }

  const produtos = {
    "0": "camisa.html",
    "1": "camisa.html",
    "2": "iphone_xr.html"
  }

  var elemento = document.querySelector(".slide img");
  
  var propriedades = elemento.getBoundingClientRect();
  
  var largura = propriedades.width;
  
  document.querySelector(".imgAtual").classList.remove("imgAtual");
  
  imagem.style.marginLeft = -largura * atual + "px";
  
  document.getElementById(atual).classList.add("imgAtual");
  
  document.getElementById("link_cloth").href = `/${produtos[atual]}`;

  
}

function roll() {
  if (rolar) {
    atual++;
    slide();
  } else {
    rolar = true;
  }
}


setInterval(() => roll(), 3500);

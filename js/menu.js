const btnMobile = document.getElementById("btn-mobile");
const test = document.getElementById("contatos");
console.log(test);

function toggleMenu(event) {
  event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

test.addEventListener("click", (e) => {
  nav.classList.remove("active");
});

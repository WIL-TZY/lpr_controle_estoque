const btn_menuPrincipal = document.querySelector("#btn__menuPrincipal");
const menuPrincipal = document.querySelector("#menuPrincipal");
const menusTodos = document.querySelectorAll(".btn__menuItem")

btn_menuPrincipal.addEventListener("click", (event) => {
    // toggle -> muda o estado toda vez que um clique ocorre
    menuPrincipal.classList.toggle("ocultar"); 
});
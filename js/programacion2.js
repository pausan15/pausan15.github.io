function abrir_menu() {
  document.getElementById("menu_hamburguesa").style.width = "250px";
  document.getElementById("menu").style.zIndex = "0";
}

function cerrar_menu() {
  document.getElementById("menu_hamburguesa").style.width = "0";
  document.getElementById("menu").style.marginLeft= "0";
  document.getElementById("menu").style.zIndex = "1";
}

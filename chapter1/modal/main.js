const popup = document.getElementById("popup")
const _open = document.getElementById("open");
const _close = document.getElementById("close");

_open.onclick = () => {
    popup.style.display="flex";
};

_close.onclick = () => {
    popup.style.display="none";
};

/*
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};*/
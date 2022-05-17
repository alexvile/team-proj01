(() => {
const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtn2: document.querySelector("[data-modal2-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.openModalBtn2.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
}
})();





(() => {
const refs = {
    openModalBtnC: document.querySelector(".js-certific-open"),
    closeModalBtnC: document.querySelector(".js-certific-close"),
    modalC: document.querySelector(".js-certific"),
};

refs.openModalBtnC.addEventListener("click", toggleModalC);
refs.closeModalBtnC.addEventListener("click", toggleModalC);

function toggleModalC() {
    refs.modalC.classList.toggle("is-hidden");
}
})();
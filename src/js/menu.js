(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuList: document.querySelector('.mt-menu__navigation-list'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuList.addEventListener('click', closeMobileMenu);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
  function closeMobileMenu(e) {
    if(!e.target.classList.contains('mt-menu__navigation-link')) {
      return
    }
    if(e.target.classList.contains('mt-menu__navigation-link')) {
      refs.menu.classList.toggle('is-open');
    }
  }
})();
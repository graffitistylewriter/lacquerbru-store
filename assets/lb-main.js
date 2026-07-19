document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mm');
  const openMenuButton = document.querySelector('[data-lb-menu-open]');
  const closeMenuButton = document.querySelector('[data-lb-menu-close]');

  if (mobileMenu && openMenuButton && closeMenuButton) {
    const openMenu = () => {
      mobileMenu.style.display = 'flex';
      mobileMenu.setAttribute('aria-hidden', 'false');
      openMenuButton.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
      mobileMenu.style.display = 'none';
      mobileMenu.setAttribute('aria-hidden', 'true');
      openMenuButton.setAttribute('aria-expanded', 'false');
    };

    openMenuButton.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  document.querySelectorAll('[data-lb-project-filters]').forEach((filterGroup) => {
    const grid = filterGroup.parentElement.querySelector('[data-lb-project-grid]');

    if (!grid) {
      return;
    }

    const cards = Array.from(grid.querySelectorAll('[data-project-category]'));

    filterGroup.addEventListener('click', (event) => {
      const button = event.target.closest('[data-category]');

      if (!button) {
        return;
      }

      const selectedCategory = button.dataset.category;

      filterGroup.querySelectorAll('[data-category]').forEach((filterButton) => {
        filterButton.classList.toggle('is-active', filterButton === button);
      });

      cards.forEach((card) => {
        const isVisible = selectedCategory === 'all' || card.dataset.projectCategory === selectedCategory;
        card.hidden = !isVisible;
      });
    });
  });
});

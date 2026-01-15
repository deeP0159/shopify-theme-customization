/**
 * Main Theme JavaScript
 * Initializes cart drawer and handles global cart functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Theme. js loaded');

  // Cart drawer management
  window.openCartDrawer = function() {
    const drawer = document.querySelector('[data-cart-drawer]');
    if (drawer) {
      drawer.classList.add('is-open');
    }
    const overlay = document.querySelector('[data-cart-overlay]');
    if (overlay) {
      overlay.classList.add('is-open');
    }
    document.body.style.overflow = 'hidden';
  };

  window.closeCartDrawer = function() {
    const drawer = document.querySelector('[data-cart-drawer]');
    if (drawer) {
      drawer.classList.remove('is-open');
    }
    const overlay = document.querySelector('[data-cart-overlay]');
    if (overlay) {
      overlay.classList.remove('is-open');
    }
    document.body.style.overflow = '';
  };

  // Cart icon update
  window.addEventListener('cart:updated', function(e) {
    const cartCount = e.detail?. item_count || 0;
    const cartCountElement = document.querySelector('[data-cart-count]');
    if (cartCountElement) {
      cartCountElement.textContent = cartCount;
      cartCountElement.style.display = cartCount > 0 ? 'inline' : 'none';
    }
  });
});

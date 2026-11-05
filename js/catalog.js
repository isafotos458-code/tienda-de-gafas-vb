// ============================================================
// RENDERIZADO DEL CATÁLOGO DE PRODUCTOS Y FAVORITOS
// ============================================================

function renderCatalog(productosAMostrar = PRODUCTS) {
  const catalogContainer = document.getElementById('catalog');
  if (!catalogContainer) return;

  catalogContainer.innerHTML = '';

  if (productosAMostrar.length === 0) {
    catalogContainer.innerHTML = '<p class="no-products">No se encontraron productos en esta categoría.</p>';
    return;
  }

  // Obtenemos los favoritos actuales del localStorage para saber cuáles pintar de rojo
  const wishlist = JSON.parse(localStorage.getItem('optica_wishlist')) || [];

  const categoriasUnicas = [...new Set(productosAMostrar.map(p => p.categoria))];

  categoriasUnicas.forEach(cat => {
    const productosDeCat = productosAMostrar.filter(p => p.categoria === cat);

    const section = document.createElement('section');
    section.className = 'catalog-category-section';

    const title = document.createElement('h2');
    title.className = 'category-title';
    title.textContent = cat;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'product-grid';

    productosDeCat.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';

      // Verificamos si este producto está en favoritos para ponerle la clase active
      const isFav = wishlist.some(item => item.id === prod.id);
      const favClass = isFav ? 'wishlist-btn active' : 'wishlist-btn';

      card.innerHTML = `
        <div class="product-img-wrapper">
          <img src="${prod.img}" alt="${prod.nombre}" loading="lazy">
          <button class="${favClass}" onclick="toggleWishlist('${prod.id}')" aria-label="Agregar a favoritos">
            ❤️
          </button>
        </div>
        <div class="product-info">
          <h3>${prod.nombre}</h3>
          <p class="product-desc">${prod.descripcion}</p>
          <p class="product-price">$${prod.precio.toLocaleString('es-AR')}</p>
          <button class="add-to-cart-btn" onclick="addToCart('${prod.id}')">Agregar al Carrito</button>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    catalogContainer.appendChild(section);
  });
}
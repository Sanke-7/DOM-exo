// Sélectionne tous les paniers d’articles
document.querySelectorAll('.cart-item').forEach(item => {
  // Boutons quantité
  const minusBtn = item.querySelector('.btn-minus');
  const plusBtn = item.querySelector('.btn-plus');
  const qtyDisplay = item.querySelector('.item-qty');
  const priceUnit = parseFloat(item.querySelector('.item-price').dataset.unitprice);
  const itemTotal = item.querySelector('.item-total');
  const removeBtn = item.querySelector('.btn-remove');
  const heartBtn = item.querySelector('.btn-heart');

  // Augmenter la quantité
  plusBtn.addEventListener('click', () => {
    let qty = parseInt(qtyDisplay.textContent, 10);
    qty++;
    qtyDisplay.textContent = qty;
    itemTotal.textContent = (qty * priceUnit).toFixed(2) + " €";
    updateTotal();
  });

  // Diminuer la quantité (min 1)
  minusBtn.addEventListener('click', () => {
    let qty = parseInt(qtyDisplay.textContent, 10);
    if (qty > 1) {
      qty--;
      qtyDisplay.textContent = qty;
      itemTotal.textContent = (qty * priceUnit).toFixed(2) + " €";
      updateTotal();
    }
  });

  // Retirer l’article
  removeBtn.addEventListener('click', () => {
    item.remove();
    updateTotal();
  });

  // "Aimer" le produit
  heartBtn.addEventListener('click', () => {
    heartBtn.classList.toggle('liked');
  });
});

// Calcul du prix total du panier
function updateTotal() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
    const qty = parseInt(item.querySelector('.item-qty').textContent, 10);
    const priceUnit = parseFloat(item.querySelector('.item-price').dataset.unitprice);
    total += qty * priceUnit;
  });
  const totalDisplay = document.querySelector('.cart-total');
  if (totalDisplay) {
    totalDisplay.textContent = total.toFixed(2) + " €";
  }
}

// Initialisation du total au chargement
updateTotal();
var addButtons = document.querySelectorAll('.product button');

// Sélectionner l'élément span#prixtotalPanier
var totalPriceElement = document.getElementById('prixtotalPanier');

// Initialiser le prix total à 0
var totalPrice = 0;

// Ajouter un événement d'écoute à chaque bouton "Ajouter au panier"
for (var i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener('click', function() {
    // Récupérer le prix de l'article à partir de l'élément span.prix
    var price = parseFloat(this.parentNode.querySelector('.prix').textContent);
    
    // Ajouter le prix à la variable totalPrice
    totalPrice += price;
    
    // Mettre à jour le contenu de l'élément span#prixtotalPanier avec le nouveau prix total
    totalPriceElement.textContent = totalPrice;
  });
}
// Sélectionnez tous les éléments du menu
const itemsMenu = document.querySelectorAll('.menu-items li a');

// Ajoutez des écouteurs d'événements à chaque élément du menu
itemsMenu.forEach(item => {
  item.addEventListener('mouseover', () => {
    // Ajoutez une classe qui déclenche l'animation
    item.classList.add('anime');
  });

  item.addEventListener('mouseout', () => {
    // Supprimez la classe qui déclenche l'animation
    item.classList.remove('anime');
  });
});


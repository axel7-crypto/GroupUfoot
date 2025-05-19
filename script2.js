window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    sections.forEach((section, index) => {
      // Applique les classes de mouvement de façon alternée
      section.classList.add(index % 2 === 0 ? 'from-left' : 'from-right');
  
      // Ajoute la classe "active" après un délai pour chaque section
      setTimeout(() => {
        section.classList.add('active');
      }, index * 300);
    });
  });
  
  // Récupération des éléments pour la lightbox
  const images = document.querySelectorAll('.galerie-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');
  const closeBtn = document.querySelector('.close');
  
  // Affichage de l'image dans la lightbox
  images.forEach(img => {
      img.addEventListener('click', () => {
          lightbox.style.display = 'flex';
          lightbox.classList.add('show'); // Ajoute l'animation
          lightboxImg.src = img.src; // Affichage de l'image
          lightboxImg.style.display = 'block'; // Afficher l'image
          lightboxVideo.style.display = 'none'; // Cacher la vidéo
      });
  });
  
 
  // Fermeture de la lightbox en cliquant sur la croix
  closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('show'); // Retirer l'animation
      setTimeout(() => { lightbox.style.display = 'none'; }, 300); // Masquer la lightbox après l'animation
      lightboxImg.style.display = 'none'; // Cacher l'image
      lightboxVideo.style.display = 'none'; // Cacher la vidéo
      lightboxImg.src = ''; // Réinitialiser l'image
      lightboxVideo.src = ''; // Réinitialiser la vidéo
  });
  
  // Fermeture de la lightbox en cliquant en dehors de l'image/vidéo
  lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === closeBtn) { // Vérifie si le clic est sur la lightbox ou la croix
          lightbox.classList.remove('show'); // Retirer l'animation
          setTimeout(() => { lightbox.style.display = 'none'; }, 300); // Masquer après l'animation
          lightboxImg.style.display = 'none'; // Cacher l'image
          lightboxVideo.style.display = 'none'; // Cacher la vidéo
          lightboxImg.src = ''; // Réinitialiser l'image
          lightboxVideo.src = ''; // Réinitialiser la vidéo
      }
  });

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
  
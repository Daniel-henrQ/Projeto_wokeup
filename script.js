
      document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById("menuToggle");
        const navContainer = document.querySelector(".nav-container");
    
        toggle.addEventListener("click", () => {
          navContainer.classList.toggle("menu-open");
        });
    
        document.querySelectorAll('.card').forEach(card => {
          card.addEventListener('click', () => {
            console.log('Card clicado (mobile test)');
            const overlay = card.querySelector('.card-overlay');
            if (!overlay) return;
    
            overlay.classList.toggle('active');
          });
        });
      });
 
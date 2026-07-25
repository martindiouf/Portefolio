// ===== Année automatique dans le footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Animation "code qui s'écrit" dans le terminal du hero =====
const snippet = `<button class="cta">
  Voir mes projets
</button>`;

const codeEl = document.getElementById('typedCode');
const blocksEl = document.getElementById('renderBlocks');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeCode() {
  if (prefersReducedMotion) {
    codeEl.textContent = snippet;
    blocksEl.classList.add('is-visible');
    return;
  }

  let i = 0;
  const speed = 28; // ms par caractère

  function step() {
    if (i <= snippet.length) {
      codeEl.textContent = snippet.slice(0, i);
      i++;
      setTimeout(step, speed);
    } else {
      // Une fois le code "écrit", les blocs colorés apparaissent :
      // le code devient visuellement une interface.
      blocksEl.classList.add('is-visible');
    }
  }
  step();
}

// Démarre l'animation quand la page est prête
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeCode, 400);
});
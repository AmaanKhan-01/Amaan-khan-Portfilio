const card = document.querySelector('.visual-card');
const tag = document.querySelector('.floating-tag');

if (card) {
  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 12;
    const y = (event.clientY / window.innerHeight - 0.5) * 12;

    card.style.transform = `rotateY(${x}deg) rotateX(${y * -1}deg) translateY(-6px)`;
    tag.style.transform = `translateX(${x * 0.4}px) translateY(${y * 0.4}px)`;
  });

  window.addEventListener('mouseleave', () => {
    card.style.transform = '';
    tag.style.transform = '';
  });
}

window.addEventListener('load', () => {
  document.body.classList.add('ready');
});
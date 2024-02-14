document.getElementById('yesBtn').addEventListener('click', function() {
  document.getElementById('response').innerText = "I knew you'd say yes 🤣 We going out tomorrow 🎉🍾 I love you! 💜💜💜";
  createConfetti();
});

document.getElementById('noBtn').addEventListener('click', function() {
  document.getElementById('response').innerText = "Oh no sike! that's not an option. try again! 🤣";
});

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  document.body.appendChild(confetti);

  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;

  setTimeout(() => {
    confetti.remove();
  }, 3000);
}

const buttons = document.querySelectorAll('.redirect-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = 'Opening...'; // Provide feedback to the user
    setTimeout(() => {
      window.open(button.dataset.url, '_blank'); // Open link in a new tab
    }, 500);
  });
});

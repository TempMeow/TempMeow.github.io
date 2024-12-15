const buttons = document.querySelectorAll('.redirect-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = 'Redirecting...'; // Provide feedback to the user
    setTimeout(() => {
      window.location.href = button.dataset.url; // Redirect after a short delay
    }, 500);
  });
});

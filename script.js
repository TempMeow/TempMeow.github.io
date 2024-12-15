const buttons = document.querySelectorAll('.redirect-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const url = button.dataset.url; // Get the URL from the button's data attribute
    if (url) {
      window.open(url, '_blank'); // Open the URL in a new tab
    } else {
      console.error('URL not found for this button.');
    }
  });
});

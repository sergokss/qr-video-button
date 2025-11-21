const button = document.getElementById('yesButton');

button.addEventListener('click', () => {
  // Если локальное фото
  window.open('photo.jpg', '_blank');

  // Если онлайн фото
  // window.open('https://example.com/photo.jpg', '_blank');
});

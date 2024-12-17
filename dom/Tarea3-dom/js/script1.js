(function(){
  const links = document.querySelectorAll('a');
  links.forEach(function(link, index) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const paragraph = link.previousElementSibling;
      if (paragraph.style.display === 'none') {
        paragraph.style.display = '';
        link.textContent = 'Ocultar contenidos';
      } else {
        paragraph.style.display = 'none';
        link.textContent = 'Mostrar contenidos';
      }
    });
  });
})();

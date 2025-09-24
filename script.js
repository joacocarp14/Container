function muestra_oculta() {
    const toggleText = document.getElementById('toggleText');
    const toggleButton = document.getElementById('toggleButton');
  

    if (toggleText.style.display === 'none') {
      toggleText.style.display = 'block';  
      toggleButton.textContent = '–'; 
    } else {
      toggleText.style.display = 'none'; 
      toggleButton.textContent = '+';  
    }
  }
const simpleForm = document.getElementById('simpleForm');
    const formError = document.getElementById('formError');
    const colors = ["lightblue", "lightgreen", "salmon", "beige", "lavender", "coral", "peachpuff", "honeydew", "khaki"];

    simpleForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      formError.textContent = '';

      const nameValue = document.getElementById('nameInput').value.trim();
      const emailValue = document.getElementById('emailInput').value.trim();

      
      if (!nameValue || !emailValue) {
        formError.textContent = 'Both name and email are required.';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        formError.textContent = 'Please provide a valid email.';
        return;
      }

      
      document.getElementById('formView').style.display = 'none';
      document.getElementById('colorChangerView').style.display = 'flex';
    });

   
    const colorButton = document.getElementById('colorButton');
    const popup = document.getElementById('popup');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    colorButton.addEventListener('click', function() {
     
      document.body.style.backgroundColor = getRandomColor();
     
      popup.style.display = 'flex';
    });

    
    yesButton.addEventListener('click', function() {
      alert("Thank you! Enjoy your new color!");
      popup.style.display = 'none';
    });

    noButton.addEventListener('click', function() {
      alert("Oh no! Try changing the color again.");
      popup.style.display = 'none';
    });
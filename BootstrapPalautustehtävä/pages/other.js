let button = document.getElementById("movebutton");
    button.addEventListener('click', function() {
        let danger = setInterval(function() {
          button.style.backgroundColor = (button.style.backgroundColor === 'darkred') ? 'white' : 'darkred';
        }, 500);
      
        setTimeout(function() {
          clearInterval(danger);
          button.style.backgroundColor = 'darkred';
          window.location = "https://www.tesla.com/fi_fi";
        }, 3000);
      });
      
  
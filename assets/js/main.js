(function($) {
  "use strict";


  // countdown
    function counter() {
      
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      let birthday = "Sep 30, 2021 00:00:00",
          countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            let now = new Date().getTime(),
                distance = countDown - now;
    
            document.getElementById("days").innerText = Math.floor(distance / (day)),
              document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      
          }, 0)
   
    }
    counter()
    
  // fix button
  function FixBtn() {
    let body = document.querySelector('body');
    let btn = document.querySelectorAll('.fxb');
    btn.forEach(sbtn => {
      sbtn.addEventListener('click', () => {
        body.classList.toggle('active')
      })
    })
  }
  FixBtn()

  
 
})(jQuery);

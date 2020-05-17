function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }


    

    function vote() {
    let radios = document.getElementsByName("drink");
    let choice = document.getElementById("result");
    for (let i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        alert(radios[i].value);
        //choice.innerText = "Your choice is " ;
      break;
        }
      }
    }
function changeCookie() {
    if (document.getElementById("cookie").src = "images/cookie/cookie1.jpg") 
    {
      document.getElementById("cookie").src = "images/cookie/cookie2.jpg";
    } else {
      document.getElementById("cookie").src = "images/cookie/cookie1.jpg";
    }
}

function fortune() {
  let answers = ["With great listening comes great learning", "Rome wasn't built in a day", "A problem shared is a problem halved", "Think twice, code once", "You can't use up creativity"];
  let fort = document.getElementById("fortunetext");
           fort.innerText = "";
           let num = Math.floor(Math.random() * (answers.length));
           fort.innerText += answers[num];
}


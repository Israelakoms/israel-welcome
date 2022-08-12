function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
      x.className += " responsive";
      /* change topnav to topnav.responsive*/
    } else{
      x.className = "topnav";
    }
  }


  var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);


    var watch = document.getElementById('watch');
    var awa = document.getElementById('wa');


    var ring = document.getElementById('ring');
    var ara = document.getElementById('ri');

    var io = document.getElementById('io');
     var counter = 0;

    var phone = document.getElementById('phone');
var apa = document.getElementById('ph');


      ring.addEventListener("mouseover", mose);
      function mose() {
        ring.style.width = "80px";
        ring.style.height = "60px";
      }

      ring.addEventListener("mouseout", shock);
      function shock() {
        ring.style.width = "35px";
      ring.style.height = "20px";
      }

      ring.addEventListener("click", getDw);
      function getDw() {

        var show = document.getElementsByClassName('show');
        for (i = 0; i < show.length; i += 1) {
          show[i].className = "hide";
        /*  awa.innerHTML =
            "I started wearing a watch last quarter. This watch is special to me because this was one of the items I boaught from my first pay cheques.";
    */   }
      ara.className = "show";
    }
/*------------------------------------------------------------------*/


    watch.addEventListener("mouseover", growc);
    function growc() {
      watch.style.width = "220px";
      watch.style.height = "250px";
      watch.style.color ='red';
    }

    watch.addEventListener("mouseout", shrinkc);
    function shrinkc() {
      watch.style.width = "145px";
      watch.style.height = "90px";
    }

    watch.addEventListener("click", getDressedc);
    function getDressedc() {
      console.log("hello");
      var show = document.getElementsByClassName('show');
      for (i = 0; i < show.length; i += 1) {
        show[i].className = "hide";
      /*  awa.innerHTML =
          "I started wearing a watch last quarter. This watch is special to me because this was one of the items I boaught from my first pay cheques.";
*/   }

    awa.className = "show";
  }
/*----------------------------------------------------------------------------------------------------------*/


phone.addEventListener("mouseover", growp);
function growp() {
  phone.style.width = "150px";
  phone.style.height = "190px";

}

phone.addEventListener("mouseout", shrinkp);
function shrinkp() {
phone.style.width = "135px";
phone.style.height = "80px";
}

phone.addEventListener("click", getDressedp);
function getDressedp() {
  console.log("hello");
  var show = document.getElementsByClassName('show');
  for (i = 0; i < show.length; i += 1) {
    show[i].className = "hide";
  /*  awa.innerHTML =
      "I started wearing a watch last quarter. This watch is special to me because this was one of the items I boaught from my first pay cheques.";
*/   }

apa.className = "show";
}




  /*---------------------------------------------------------------------*/




  ring.addEventListener(
 "touchstart",
 function(e) {
   io.innerHTML = "ouch";
 },
 false
);

ring.addEventListener(
  "touchend",
  function(e) {
    counter += 1;
    io.innerHTML = "Touched " + counter + " times";
  },
  false
);

/*------------------------------------------ */




watch.addEventListener(
 "touchstart",
 function(e) {
   io.innerHTML = "ouch";
 },
 false
);

watch.addEventListener(
  "touchend",
  function(e) {
    counter += 1;
    io.innerHTML = "Touched " + counter + " times";
  },
  false
);

/*------------------------------------------------------------------*/


phone.addEventListener(
 "touchstart",
 function(e) {
   io.innerHTML = "ouch";
 },
 false
);

phone.addEventListener(
  "touchend",
  function(e) {
    counter += 1;
    io.innerHTML = "Touched " + counter + " times";
  },
  false
);

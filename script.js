var results= document.getElementById("results");
var myMsg= document.getElementById("myMsg");
var footer= document.getElementById("footer");

document.f.onsubmit= processForm;
document.f.onreset = resetForm;


function processForm(){

  var noun = document.f.noun.value;
   var personInroom = document.f.personInroom.value;
  var verb = document.f.verb.value;
  var body = document.f.body.value;
   var ad = document.f.ad.value;
  var noun1 = document.f.noun1.value;
  var noun2 = document.f.noun2.value;
  var noun3 = document.f.noun3.value;
    var liquid = document.f.liquid.value;
  var adi = document.f.adi.value;
  var noun4 = document.f.noun4.value;
  var animal = document.f.animal.value;
  var noun5 = document.f.noun5.value;
  var noun6 = document.f.noun6.value;
  var FemaleInroom = document.f.FemaleInroom.value;
  var reptile = document.f.reptile.value;
  var parts = document.f.parts.value;


  myMsg.style.backgroundColor = "#FFFFFF";
  myMsg.style.borderRadius = "20px";
   myMsg.style.color = "darygrey";
   myMsg.style.fontSize = "18pt";
   myMsg.style.fontFamily = "Indie Flower";
   myMsg.style.padding = "30px";
  myMsg.style.marginTop = "20px";
footer.style.marginTop =("auto")




results.classList.remove("hide");
myMsg.innerHTML =
  "It was Thanksgiving, and the scent of roasted " + noun + " spread through my house. Maggie" + ", its time to " + verb + " called my wife! I couldn't wait to get my " + body + " on that "+ ad + " Thanksgiving meal. My family sat around the dinning-room " + noun1 + ". The table was laid out with every kind of smelly sock" + " imaginable. There was a basket of hot buttered " + noun3 + " and glasses of sparkling " + liquid + ". The " + adi + " turkey sat, steaming next to a " + noun4 + " gravy. A bowl of ruby-red " + animal + " sauce, sweet-" +
  noun5 + " casserole, and dish of mashed " + noun6 + " tempted my taste buds. But the dish I looked forward to most was my wife " + FemaleInroom + "'s famous " + reptile + " pie. Thankgiving is my favorite holiday " + parts + " down.";

   return false;

}

function resetForm() {
  myMsg.innerHTML = "";
  myMsg.style.backgroundColor = "rgb(0, 240, 240)";
  footer.style.marginTop ="-150px";
  results.classList.add("hide");
}
